import classes from "./Tasks.module.css";
import EachTaskInListContainer from '../EachTaskInList/EachTaskInListContainer';
import React from "react";

const Tasks = (props) => {
    return (
        <div className={classes.tasksList} >
            <EachTaskInListContainer
                state={props.state}
                store={props.store}
                removeTask={props.removeTask}
                taskValue={props.taskValue} />
        </div>
    )
}

export default Tasks;