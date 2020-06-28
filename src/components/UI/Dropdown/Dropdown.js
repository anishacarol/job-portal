import React from "react";
// import * as Styled from "./Dropdown.styles";

const Dropdown = ({ arr, onChangeHandler, name }) => {
  return (
    <select name={name} onChange={onChangeHandler}>
      {arr.map(item => (
        <option value={item}>{item}</option>
      ))}
    </select>
  );
};

export default Dropdown;
