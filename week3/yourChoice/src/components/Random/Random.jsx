import React, { useState, useEffect } from 'react';

import ContentWrapper from '../UI/ContentWrapper';

const Random = (props) => {
    const [timer, setTimer] = useState(3);
    useEffect(() => {
        const count = setInterval(() => {
            setTimer(timer => timer - 1);
        }, 1000);
        if (timer === 0) {
            clearInterval(count);
        }
        return () => clearInterval(count);
    }, [timer])
  return <ContentWrapper>
    {timer}
  </ContentWrapper>;
};

export default Random;
