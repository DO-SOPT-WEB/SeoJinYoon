import ChooseContainer from '../UI/ChooseContainer';
import ChooseBtn from '../UI/ChooseBtn';
import H1 from '../UI/H1';

// 선택 버튼 감싸는 div + 선택 버튼
const ChooseContent = () => {
  return (
    <ChooseContainer>
      <ChooseBtn>
        <H1>취향대로 추천</H1>
      </ChooseBtn>
      <ChooseBtn>
        <H1>랜덤 추천</H1>
      </ChooseBtn>
    </ChooseContainer>
  );
};

export default ChooseContent;
