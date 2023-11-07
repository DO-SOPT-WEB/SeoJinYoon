import styled from 'styled-components'

const ChooseContainer = (props) => {
    return <ChooseContainerDiv>{props.children}</ChooseContainerDiv>
}

const ChooseContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  margin: 2.5rem 0 0.5rem 0;
`;

export default ChooseContainer;