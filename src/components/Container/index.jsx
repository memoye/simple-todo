import styles from "./container.module.css"
import Item from "../Item"
import { useState } from "react"

export const Pins = () => {
    return (
        <div className='pins'>
            <div className="pin"></div>
            <div className="pin"></div>
            <div className="pin"></div>
            <div className="pin"></div>
            <div className="pin"></div>
            <div className="pin"></div>
            <div className="pin"></div>
            <div className="pin"></div>
        </div>
    )
}




const Container = () => {
    const [tasks, setTasks] = useState([
        { id: 0, task: "--placeholderTask", isDone: false }
    ])



    const ListTasks = tasks.map((task, index) => <Item
        key={ index }
        { ...task }
        setTasks={ setTasks }
        tasks={ tasks }
    />)


    return (
        <>
            <div className={ styles.container }>
                {
                    ListTasks
                }
            </div>
            <Item
                type={ "action" }
                tasks={ tasks }
                setTasks={ setTasks }
            />
        </>
    )
}

export default Container