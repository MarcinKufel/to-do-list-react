import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <div className="buttons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button class="buttons__button">
                    {hideDoneTasks ? "Show" : "Hide"} Done
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