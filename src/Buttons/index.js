import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (

    <div className="buttons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button class="buttons__button">
                    {hideDone ? "Show" : "Hide"} Done
            </button>
                <button
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