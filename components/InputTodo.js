import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import { COLORS } from '../App'
const InputTodo = ({ setText, text, addTodo }) => {
    return (
        <View style={styles.footer}>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Add Todo' value={text} onChangeText={(text) => setText(text)} />
            </View>
            <TouchableOpacity onPress={addTodo}>
                <View style={styles.iconContainer} >
                    <Icon name='add' color={"#fff"} size={30} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputTodo

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
        backgroundColor: "#fff",
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
        backgroundColor: "#1f145c",
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
