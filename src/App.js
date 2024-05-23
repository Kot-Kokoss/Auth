import './scss/app.scss';
// import Reg from './pages/Home.jsx';
// import Reset from './pages/Cart.jsx';
import Auth from './pages/Auth.jsx';
// import Error from './pages/Error.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Auth />}></Route>
          {/* <Route path="/registration" element={<Reg />}></Route>
      <Route path="/reset" element={<Reset />}></Route>
      <Route path="*" element={<Error />}></Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
