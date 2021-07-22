import React from 'react';

const AddTaskForm = props => {

    return (
        <form className="form">
            <input onChange={(e) => props.set({currentTask: e.target.value})} className="input" type="text" placeholder="Add new task"/>
            <input onClick={props.Add} className="btn" type="button" value="Add"/>
        </form>
    );
};


export default AddTaskForm;