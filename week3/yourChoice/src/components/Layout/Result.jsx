import styled from 'styled-components';

const Result = (props) => {
    return <ResultContainer>
        <img src={props.imgSrc} />
        <ResultTitle>
            <h2>{props.songTitle}</h2>
        </ResultTitle>
    </ResultContainer>
}

export default Result;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 2rem;
  height: 20rem;
  width: 100%;
`;

const ResultTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.boldPink};

  width: 60%;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;

  font-size: 25px;
`;