import styles from "./container.module.css"
import Item from "../Item"
import { useState } from "react"

export const Pins = () => {
    return (
        <div className='pins'>
            <div className="pin" />
            <div className="pin" />
            <div className="pin" />
            <div className="pin" />
            <div className="pin" />
            <div className="pin" />
            <div className="pin" />
            <div className="pin" />
        </div>
    )
}

const Container = () => {
    const initialData = [
        { id: Math.floor(Math.random() * 1000), task: "Implement Add", completed: false, isEditing: false },
        { id: Math.floor(Math.random() * 1000), task: "Implement edit", completed: false, isEditing: false },
        { id: Math.floor(Math.random() * 1000), task: "Implement saveEdit", completed: false, isEditing: false },
        { id: Math.floor(Math.random() * 1000), task: "Implement delete", completed: false, isEditing: false },
        { id: Math.floor(Math.random() * 1000), task: "Finish styling", completed: false, isEditing: false },
        { id: Math.floor(Math.random() * 1000), task: "Push to repo!", completed: false, isEditing: false }

    ]

    const [tasksList, setTasksList] = useState(initialData)


    return (
        <>
            <div className={ styles.container }>
                {
                    tasksList.map((task, index) => <Item
                        key={ task.id }
                        { ...task }
                        tasksList={ tasksList }
                        setTasksList={ setTasksList }
                    />)
                }
            </div>
            <Item
                tasksList={ tasksList }
                setTasksList={ setTasksList }
                type={ "action" }
            />
        </>
    )
}

export default Container