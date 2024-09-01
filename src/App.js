import Home from './pages/home';
import Feed from './pages/feed';
import Login from './pages/Login';
import SignUp from './pages/signUp';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/feed" element={ <Feed /> } />
        <Route path="/signUp" element={ <SignUp /> }/>
      </Routes>
    </Router>
  );
}

export default App;
