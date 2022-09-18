import { Routes, Route } from 'react-router-dom';

import Navigation from "./routes/Navigation/Navigation";
import Home from './routes/Home/Home';
import Authentication from './routes/Authentication/Authentication';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App