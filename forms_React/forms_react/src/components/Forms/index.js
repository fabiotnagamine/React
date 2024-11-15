import React from "react";
import  checkPropTypes  from "prop-types";
import { FaPlus } from "react-icons/fa";
import "./form.css";

export default function Forms({handleChange, handleSubmit , newTask, }) {
  return(

    <form onSubmit={handleSubmit} className="form" action="#">
              
              <input
                onChange={handleChange}
                type="text"
                value={newTask}
              />
              <button type="submit">
                <FaPlus />
              </button>
            </form>
  );
}

Forms.checkPropTypes = {
  handleSubmit: checkPropTypes.func.isRequired,
  handleChange: checkPropTypes.func.isRequired,
  newTask: checkPropTypes.string.isRequired,
};



