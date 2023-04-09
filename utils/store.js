import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (value) => {
    try {
        const stringifyData = JSON.stringify(value)
        await AsyncStorage.setItem('todos', stringifyData);
    } catch (e) {
        alert("There was an error!")
    }
}

export const getItem = async () => {
    try {
        const value = await AsyncStorage.getItem('todos')
        if (value) {
            console.log(15, value);
            return JSON.parse(value);
        } else {
            return []
        }
    } catch (e) {
        alert("There was an error!")
        return []

    }
}