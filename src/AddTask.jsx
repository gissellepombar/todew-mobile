import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"

export default function AddTask({setTasks}) {
    const [task, setTask] = useState("")
    const newTask = {
        "done": false, 
        "task": task
    }

    const handleNewTask = () => {
        fetch(`https://todo-c9-api-gp.web.app/tasks`, {
        method: "POST", 
        headers: { 
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(newTask),
        })
            .then(res => res.json())
            .then(setTasks)
            .then(setTask(""))
            .catch(console.error)
    }

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Add new task</Text>
            <TextInput
                style={styles.input} 
                value={task}
                onChangeText={setTask}
                />
            <TouchableOpacity style={styles.button} onPress={handleNewTask}>
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#282120',
    },
    input: {
        height: 40,
        borderColor: '#E6C2BF',
        borderWidth: 1, 
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#F8EFE4',
    },
    button: {
        backgroundColor: '#FAD02C',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#282120',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    buttonText: {
        color: '#282120',
        fontWeight: 'bold',
    },
});
