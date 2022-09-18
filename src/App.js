import { Routes, Route } from 'react-router-dom';

import Navigation from "./routes/Navigation/Navigation";
import Home from './routes/Home/Home';
import Authentication from './routes/Authentication/Authentication';
import Profile from './components/Profile/Profile';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
import Suggestion from './components/Suggestion/Suggestion';
import Support from './components/Support/Support';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='My Profile' element={<Profile />} />
        <Route path='My Products' element={<Products />} />
        <Route path='My Services' element={<Services />} />
        <Route path='More Product suggestions' element={<Suggestion />} />
        <Route path='My support' element={<Support />} />
      </Route>
    </Routes>
  )
}

export default App