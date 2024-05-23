import './scss/app.scss';
import React from 'react';
// import Header from './component/Header.jsx';
import Reg from './pages/Reg.jsx';
import Reset from './pages/Reset.jsx';
import Auth from './pages/Auth.jsx';
import Error from './pages/Error.jsx';
import { Routes, Route } from 'react-router-dom';
import { Context } from './index.js';

function App() {
  const { user } = React.useContext(Context);

  return (
    <>
      {/* <Header /> */}
      <div className="wrapper">
        <div className="content">
          <Routes>
            <Route path="/" element={<Auth />}></Route>
            <Route path="/registration" element={<Reg />}></Route>
            <Route path="/reset" element={<Reset />}></Route>
            {/* <Route path="/main" element={<Main />}></Route> */}
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
