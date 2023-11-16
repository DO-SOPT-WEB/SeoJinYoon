import React, { createContext, useState } from 'react';

const AuthContext = React.createContext({
  id: 0,
  nickname: '',
  username: '',
  setAuthData: () => {},
});

export const AuthContextProvider = (props) => {
  const [authData, setAuthData] = useState({
    id: 0,
    nickname: '',
    username: '',
  });

  const contextValue = {
    ...authData,
    setAuthData: (newAuthData) => setAuthData(prev => newAuthData),
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
