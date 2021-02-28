import classes from "./Tasks.module.css";
import EachTaskInList from '../EachTaskInList/EachTaskInList';
import React from "react";
import store from '../../store';

class Tasks extends React.Component {
    render() {
        return <div className={classes.tasksWrapper}>
            {this.props.tasksList.map(u => { // props.users передаём через функцию mapStateToProps в контейнерной компоненте
                console.log('u ', u);
                return (
                    <div className={classes.tasksList} >
                        <EachTaskInList state={true} store={store} taskValue={u} />
                    </div>
                )
            })}
        </div >
    }
}

export default Tasks;