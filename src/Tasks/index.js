import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`tasks__item ${ task.done && hideDoneTasks ? "tasks__item--hidden" : ""}`}
            >
                <button className=" tasks__button tasks__button--toggleDone">
                    { task.done ? "✔" : ""}
                </button>

                <span className={`tasks__content ${ task.done ? "tasks__content--done" : ""}`} >
                    { task.content}
                </span>

                <button className="tasks__button tasks__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>

);


export default Tasks;