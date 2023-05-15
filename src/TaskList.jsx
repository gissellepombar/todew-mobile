import { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";

export default function TaskList() {
    const [tasks, setTasks] = useState();

    //fetch tasklist in useEffect (run only once)
    useEffect(() => {
        fetch('https://todo-c9-api-gp.web.app/tasks')
            .then(res => res.json())
            .then(setTasks)
            .catch(console.error)
    }, [])

    const toggleDone = (task) => {
        const done = !!!task.done; 
        fetch(`https://todo-c9-api-gp.web.app/tasks/${task.taskId}`, {
        method: "PATCH", 
        headers: { 
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({done}),
        })
            .then(res => res.json())
            .then(setTasks)
            .catch(console.error)
    }

    return (
        <ScrollView style={styles.bg}>
            <View style={styles.container}>
                <Text style={styles.h1}>To Dew 🌱</Text>
                <AddTask setTasks={setTasks} />
                {
                !tasks
                ? <Text> Loading...</Text>
                : tasks.map((element) => (
                    <TouchableOpacity 
                            onPress={() => toggleDone(element)}
                            key={element.taskId} >
                        <TaskCard
                            data={element}
                        />
                    </TouchableOpacity>
                ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#F8EFE4',
    },
    container: {
        padding: 20,
    },
    h1: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: "center",
        color: '#282120',
        // marginBottom: 10,
        marginTop: 25,
    }
})

