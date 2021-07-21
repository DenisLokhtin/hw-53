import React from 'react';

const AddTask = props => {

    return (
        <div className="card">
            <p className="text">{props.message}</p>
            <p className="close">&#10006;</p>
        </div>
    )

}


export default AddTask;