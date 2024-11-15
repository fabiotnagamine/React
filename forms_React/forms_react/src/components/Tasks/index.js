import React from "react";
import "./task.css";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Task({ tasks, handleEdit, handleDelete}) {
    return (
        <ul className="tasks">
            {tasks.map((task, index) => (
                <li key={task}>
                    {task}
                    <span className="buttons">
                        <FaEdit className="button_edit" onClick={() => handleEdit(index)} />
                        <FaWindowClose className="button_delete" onClick={(event) => handleDelete(event, index)} />
                    </span>
                </li>
            ))}
        </ul>
    );
}

Task.propTypes = {
    tasks: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};