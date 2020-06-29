import React from "react";
import * as Styled from "./Dropdown.styles";

const Dropdown = ({ arr, onChangeHandler, name, defaultText }) => {
  return (
    <Styled.Select name={name} onChange={onChangeHandler}>
      <Styled.Option value="all">{defaultText}</Styled.Option>
      {arr.map(item => (
        <Styled.Option value={item}>{item}</Styled.Option>
      ))}
    </Styled.Select>
  );
};

export default Dropdown;
