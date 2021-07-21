import React from 'react';

const AddTaskForm = props => {

    return (
        <form className="form">
            <input className="input" type="text" placeholder="Add new task"/>
            <input className="btn" type="button" value="Add"/>
        </form>
    )

}


export default AddTaskForm;