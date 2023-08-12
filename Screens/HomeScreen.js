import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputTodo from '../components/InputTodo';
import ListItem from '../components/ListItem';
import { useNavigation } from '@react-navigation/native';
// rnfes
export const COLORS = { primary: '#1f145c', white: '#FFF' }

const storeData = async (value) => {
    try {
        const stringifyData = JSON.stringify(value)
        await AsyncStorage.setItem('todos', stringifyData)
    } catch (e) { console.log(e); }
}
const HomeScreen = () => {

    const [login, setLogin] = useState(true)
    const navigation = useNavigation();
    useEffect(() => {
        if (!login) {
            navigation.navigate("Login")
        }
    }, [])
    const [text, setText] = useState('')
    const [todos, setTodo] = useState([]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('todos')
            if (value !== null) {
                setTodo(JSON.parse(value))
            }
        } catch (e) { }
    }
    useEffect(() => {
        getData()
    }, [])

    const handleComplate = id => {
        const updateTodos = todos.map(todo => todo.id == id ? { ...todo, complated: true } : todo)
        setTodo(updateTodos)
        storeData(updateTodos)
    }

    const handleDelete = id => {
        const updateTodos = todos.filter(todo => todo.id != id)
        console.log(updateTodos);
        setTodo(updateTodos)
        storeData(updateTodos)
    }
    const handleAllDelete = () => {
        setTodo([])
        storeData([])
    }
    const addTodo = () => {
        if (text) {
            const updateData = [{
                id: (Math.random()) * 100,
                task: text,
                complated: false
            }, ...todos]
            setTodo(updateData);
            storeData(updateData)
            setText("")
        } else {
            Alert.alert("Enter task");
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: COLORS.primary }} >TODO APP</Text>
                <Icon onPress={handleAllDelete} style={{
                    padding: 10,
                    backgroundColor: 'red',
                    borderRadius: 50
                }} name="delete" size={20} color={'#fff'} />
            </View>
            <FlatList
                contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                data={todos}
                renderItem={
                    (item) => <ListItem
                        handleComplate={handleComplate}
                        handleDelete={handleDelete}
                        todo={item}
                    />
                }
            />
            <InputTodo text={text} addTodo={addTodo} setText={setText} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        color: '#fff',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        backgroundColor: COLORS.white,
        elevation: 40,
        flex: 1,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 30,
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginLeft: 5,
    },
    iconContainer: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 25,
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    listItem: {
        padding: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 7,
        marginVertical: 10
    },
    actionIcon: {
        height: 25,
        width: 25,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 4,
    }
});
