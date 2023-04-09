import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../App';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'



function ListItem({ todo, handleComplate, handleDelete }) {
    const { task, complated, id } = todo.item;
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

export default ListItem;

const styles = StyleSheet.create({
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
