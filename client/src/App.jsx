import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import PrivateRoute from './components/privateRoute';

import CreateListing from './pages/createListing';
import UpdateListing from './pages/UpdateListing';

export default function App() {
  return <BrowserRouter>
  <Header  />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/sign-in" element={<SignIn />} />
  <Route path="/about" element={<About />} />
  <Route  element={<PrivateRoute />} >

  
  
  <Route path="/profile" element={<Profile />} />
  <Route path="/sign-up" element={<SignUp />} />
  <Route path='/create-listing' element={<CreateListing />} />
  <Route path='/update-listing/:listingId' element={<UpdateListing />} 
  />
  </Route>
  
</Routes>
  </BrowserRouter>
   
}
