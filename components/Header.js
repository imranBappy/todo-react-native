import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../App';

export default function Header({ handleAllDelete }) {
    return (
        <View style={styles.header}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: COLORS.primary }} >TODO APP</Text>
            <Icon onPress={handleAllDelete} style={{
                padding: 10,
                backgroundColor: 'red',
                borderRadius:50
            }} name="delete" size={20} color={'#fff'} />

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});
