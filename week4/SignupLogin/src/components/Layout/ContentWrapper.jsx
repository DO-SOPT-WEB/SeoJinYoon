import react from 'React';
import styled from 'styled-components';

const ContentWrapper = (props, {children}) => {
    return (
        <Wrapper>
            <Header>{props.header}</Header>
            {props.children}
        </Wrapper>
    )
}

export default ContentWrapper;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 15rem;
  padding: 3rem;

  border: 1px solid ${({theme}) => theme.colors.gray};
  border-radius: 1rem;
  background-color: ${({theme}) => theme.colors.white};
`

const Header = styled.header`
    font-size: 2rem;
`