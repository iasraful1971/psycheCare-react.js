import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AllServices from './componenets/AllService/AllServices/AllServices';
import Contact from './componenets/Connect/Contact/Contact';
import Loggin from './componenets/Connect/Loggin/Loggin';
import Registation from './componenets/Connect/Registation/Registation';
import Doctors from './componenets/Doctorpage/Doctors/Doctors';
import AboutUs from './componenets/Font_page/About/Aboutus/AboutUs';
import Home from './componenets/Font_page/Home/Home';
import PrivateRoute from './componenets/PrivateRoute/PrivateRoute';
import ServiceDetails from './componenets/ServiceDetails/ServiceDetails';
import NotFound from './componenets/Shared/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>
        
    

        <Switch>

          <Route exact path="/">
              <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>


          <Route path="/contact-us">
            <Contact></Contact>
          </Route>
        <Route path="/about-us">
          <AboutUs></AboutUs>
        </Route>
     
            <Route path="/service">
              <AllServices></AllServices>
            </Route>
     
          <Route path="/doctor">
            <Doctors></Doctors>
          </Route>

      <Route path="/loggin">
        <Loggin></Loggin>
      </Route>
       
       <Route path="/registation">
         <Registation></Registation>
       </Route>
     
     <PrivateRoute path="/details/:id">
       <ServiceDetails></ServiceDetails>
     </PrivateRoute>

          

     <Route path="*">
       <NotFound></NotFound>
     </Route>

        </Switch>
     
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
