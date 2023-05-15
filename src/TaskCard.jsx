import { View, StyleSheet, Text } from "react-native";

export default function TaskCard({data}) {
    const {task, done } = data;

    return (
        <View style={styles.taskCardContainer}>
                <Text>{done ? '🌼' : '🔘'} {task}</Text>
                {/* <Text style={done ? styles.textColorDone : styles.textColor}>{done ? '🌼' : '🔘'} {task}</Text> */}
            </View>
    )
}

const styles = StyleSheet.create({
    taskCardContainer: {
        backgroundColor: "#E6C2BF",
        padding: 20,
        marginVertical: 5,
        borderRadius: 10,
    }, 
    
    textColor: {
        fontSize: 20, 
        color: "#282120", 
        textTransform: 'capitalize'
    },
    textColorDone: {
        fontSize: 20, 
        color: "#FAD02C", 
        textTransform: 'capitalize',
        textDecorationLine: "line-through",
    }
})