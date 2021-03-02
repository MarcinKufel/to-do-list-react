import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <div className="buttons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button onClick = {toggleHideDone} className="buttons__button">
                    {hideDone ? "Show" : "Hide"} Done
            </button>
                <button
                    onClick={setAllDone}
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Done All
            </button>
            </React.Fragment>
        )}
    </div>
);
export default Buttons;