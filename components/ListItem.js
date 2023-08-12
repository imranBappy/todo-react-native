import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from "../App";

function ListItem({ todo, handleComplate, handleDelete }) {
    const { task, complated, id } = todo.item || { task: "no task", complated: false, id: 0 };
    return (
        <View style={styles.listItem}>
            <View style={{ flex: 1 }}>
                <Text style={{
                    marginTop: 3,
                    fontWeight: 'bold', fontSize: 15, color: '#1f145c',
                    textDecorationLine: complated ? 'line-through' : 'none'
                }}>{task}</Text>
            </View>
            {
                !complated && <TouchableOpacity onPress={() => handleComplate(id)} TouchableOpacity style={[styles.actionIcon]}>
                    <Icon name='done' size={20} color="#fff" />
                </TouchableOpacity>
            }
            <TouchableOpacity onPress={() => handleDelete(id)} style={[styles.actionIcon, { backgroundColor: 'red' }]}>
                <Icon name='delete' size={20} color="#fff" />
            </TouchableOpacity>
        </View >
    );
}
const styles = StyleSheet.create({


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
export default ListItem;
