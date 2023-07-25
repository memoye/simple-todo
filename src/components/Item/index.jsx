import { useEffect, useState } from "react"
import styles from "./item.module.css"

const Item = (props) => {
    const { id = Math.round(Math.random() * 1000), task = "Add task to see your task here", completed = false, type, tasksList, setTasksList, isEditing } = props

    let newTodo = ""
    let newData = task

    function createTodo(e) {
        return { id: Math.floor(Math.random() * 1000), task: e.currentTarget.value, completed: false }
    }




    function addTodo() {
        setTasksList(prev => [...prev, newTodo])
    }

    function editingItem(task, status) {
        let Editing = tasksList.map((item) => {
            if (item.task === task) {
                return { ...item, isEditing: status }
            } else {
                return { ...item, isEditing: false }
            }
        })
        setTasksList(Editing)
    }

    function saveEdit(taskId, newData) {
        const updatedTask = tasksList.map((item) => {
            if (item.id == taskId) {
                return { ...item, isEditing: false, task: newData }
            } else {
                return { ...item, isEditing: false }
            }
        })
        setTasksList(updatedTask)
    }

    function deleteTask(id) {
        const updatedList = tasksList.filter((item) => item.id !== id)
        setTasksList(updatedList)
    }

    function setStatus() {
        const UpdatedList = tasksList.map((item) => {
            if (item.id === id) {

                return { ...item, completed: (completed === true ? false : true), isEditing: false }
            } else {
                return item
            }
        })
        setTasksList(UpdatedList)
    }


    return (

        <>
            {
                type !== "action" ?
                    <div className={ `${styles.item}` }>

                        <div onClick={ () => { setStatus() } } className={ `${!completed ? styles.statusBox : styles.red}` } title={ completed ? "Completed" : "Pending" }>
                            <span>{ completed ? "✅" : "🟩" }</span>
                        </div>

                        <p className={ `${styles.text}` }>

                            { isEditing ? <input className={ styles.text } onChange={ (e) => { newData = e.currentTarget.value } } type="text" defaultValue={ task } /> : <span className={ `${completed && styles.strike}` }> { task }</span> }

                            <button onClick={ () => {
                                editingItem(task, true)
                            } } className={ completed ? styles.hide : (isEditing ? styles.hide : styles.editBtn) } >✏️</button>

                            <button onClick={
                                isEditing ? () => {
                                    saveEdit(id, newData)
                                } :
                                    () => {
                                        deleteTask(id)
                                    }
                            } className={ (isEditing ? styles.okBtn : styles.delBtn) } > { isEditing ? "✔️" : "❌" }</button>

                        </p>

                    </div>

                    :

                    <div>

                        <button className={ styles.plus }
                            onClick={ () => {
                                newTodo && addTodo(props)
                            } } >➕</button>

                        <input className={ styles.text } type="text" name="todo" id="todo" placeholder="Add task"
                            onInput={ (e) => {
                                newTodo = createTodo(e)
                            } }

                            onKeyDown={ (e) => {
                                e.key === "Enter" && (console.log(e.currentTarget.value))
                            } }

                            onBlur={ (e) => {

                                tasksList[tasksList.length - 1].task === e.currentTarget.value ? e.currentTarget.value = "" : null

                            } }
                        />
                    </div>
            }
        </>
    )
}

export default Item