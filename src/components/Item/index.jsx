import { useState } from "react"
import styles from "./item.module.css"

const Item = (props) => {
    const { type, isDone, task, tasks, setTasks, id } = props
    const [status, setStatus] = useState(isDone)
    const [newTask, setNewTask] = useState([{ id: 0, task: "--placeholderTask", isDone: false }])

    function updateTasks() {
        if (tasks[tasks.length - 1].task !== newTask[0].task) {
            setTasks(prev => prev.concat(newTask))
        }

    }

    function deleteTask() {
        let newTasks;
        newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks);
    }

    return (

        <>
            {
                type !== "action" ?
                    <div className={ `${styles.item} ${task == "--placeholderTask" && styles.pht}` }>
                        <div className={ `${styles.cbBox} ${status && styles.faded}` }>
                            <input name='status' className={ `${styles.checkbox}` } type="checkbox" checked={ status } onChange={ (e) => {
                                status ? setStatus(false) : setStatus(true)
                            } } />
                        </div>
                        <p className={ `${styles.text} ${status && styles.strike}` }>{ task } </p>

                        <button onClick={ () => {
                            deleteTask()
                        } } className={ styles.delBtn } >❌</button>
                    </div >
                    :
                    <div>
                        <button className={ styles.plus }
                            onClick={ () => {
                                updateTasks()
                            } }
                        >➕</button>
                        <input className={ styles.text } type="text" name="todo" id="todo" placeholder="Add task"
                            onInput={ (e) => {
                                setNewTask([{ id: tasks.length + 1, task: e.currentTarget.value, isDone: false }])
                            } }
                            onKeyDown={ (e) => {
                                e.key === "Enter" && (updateTasks(), e.currentTarget.value = null)
                            } }
                            onBlur={ (e) => {
                                e.currentTarget.value = null
                            } }
                        />
                    </div>
            }
        </>
    )
}

export default Item