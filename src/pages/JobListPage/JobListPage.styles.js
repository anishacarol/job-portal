import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    align-self: center;
    margin-right: 15px;
  }
`;

export const FiltersResultCount = styled.div`
  align-self: center;
  margin-right: 30px;
  font-size: 18px;
  span {
    font-weight: bold;
  }
`;
