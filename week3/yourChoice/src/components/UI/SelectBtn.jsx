import styled from 'styled-components'

const SelectButton = (props) => {
    return <SelectBtn>{props.children}</SelectBtn>
}

const SelectBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33%;
  height: 18rem;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid gray;
  background-color: white;
  cursor: pointer;

  &:hover {
    border: 3px solid gray;
  }
  &.active {
    background-color: pink;
  }
`;

export default SelectButton;