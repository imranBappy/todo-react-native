import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import ListItem from './components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
export const COLORS = { primary: '#1f145c', white: '#FFF' }
const storeData = async (value) => {
  try {
    const stringifyData = JSON.stringify(value)
    await AsyncStorage.setItem('todos', stringifyData)
  } catch (e) { console.log(e); }
}

export default function App() {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Header handleAllDelete={handleAllDelete} />
      <FlatList
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        data={todos} renderItem={(item) => <ListItem
          handleComplate={handleComplate}
          handleDelete={handleDelete}
          todo={item} />} />
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Add Todo' value={text} onChangeText={(text) => setText(text)} />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.iconContainer} >
            <Icon name='plus' color={COLORS.white} size={30} />
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    paddingVertical: 10
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  }
});
