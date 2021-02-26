import React from "react";
import "./style.css";

const Form = () => (
    <form className="form">
    <input className="form__input" placeholder="what to do?" focus/>
    <button className="form__button">Add new task</button>
    </form>
)

export default Form;

