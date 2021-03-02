import React, {useState} from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
        <input 
        className="form__input" 
        placeholder="what to do?" 
        value={newTaskContent} 
        onChange={({target}) => setNewTaskContent(target.value)}
        />
        
        <button className="form__button">Add new task</button>
        </form>
    )
}

export default Form;

