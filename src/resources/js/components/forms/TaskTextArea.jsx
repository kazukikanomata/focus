import React from 'react';

const TaskTextarea = ({ value, onChange, disabled }) => {
  return (
    <>
      <fieldset className="fieldset">
        <legend class="fieldset-legend">what's your task?</legend>
        <textarea
          className="textarea h-24 w-full mb-2"
          placeholder="内容"
          value={value}
          onChange={onChange}
          disabled={disabled}
        ></textarea>
      </fieldset>
    </>
  );
};
export default TaskTextarea;
