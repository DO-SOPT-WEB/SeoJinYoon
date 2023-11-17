import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import MyPage from './Pages/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage/:userId" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;