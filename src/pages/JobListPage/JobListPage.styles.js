import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    align-self: center;
    margin-right: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FiltersResultCount = styled.div`
  align-self: center;
  margin-right: 30px;
  font-size: 18px;

  span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;
