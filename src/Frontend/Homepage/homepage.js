import Display from '../Displaypage/OfficeSpaces';
import Education from '../Displaypage/Education'
import Restaurant from '../Displaypage/restaurant';
import Register from '../Register/Register';
import Navbar from '../Navbar';
import Desk from '../Displaypage/Desk';
import Login from '../Login/Login'
import Aboutus from '../Aboutus/Aboutsus';
import Footer from '../footer';
import Contactus from '../Contactus/Contactus'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Homepage1 from './Homepage1';
import Admin from '../Dashboard/Admins/Admin'
import Report from '../Dashboard/Admins/Report'
import Props from '../Dashboard/Admins/admprop'
import User from '../Dashboard/Userdashboard/userdash'
import Archdash from '../Dashboard/Architect/Archdash';
import Allprops from '../Dashboard/Admins/allprops';
import Order from '../Dashboard/Architect/Order';
//<<<<<<< HEAD
import Forgotpass from '../Login/Forgotpass'
import Book from '../Booking/booking';
//=======
import  Properties  from '../Propertyadd/properties';
import Edituser from '../Dashboard/Userdashboard/edituser';
import Customize from '../Dashboard/Userdashboard/customize';
//>>>>>>> f38cc243e85f8945dc3d87737a45b54f02ed9f19
function Homepage() {
  return (
    <>
     <BrowserRouter>
        <Navbar />
        
     <Switch>
      <Route  exact path='/'component={Homepage1}></Route>
     <Route path='/login'component={Login}/>
     <Route path='/register' component={Register}/>
     <Route path='/aboutus'component={Aboutus}/>
     <Route path='/home'component={Homepage1}/> 
     <Route path='/display'component={Display}/> 
   
   <Route path='/contactus'component={Contactus }/> 

   <Route path='/add'component={Properties }/> 

     <Route path='/education'component={Education}/> 
     <Route path='/restaurant'component={Restaurant}/> 
     <Route path='/desk'component={Desk}/> 
     <Route path='/admin' component={Admin}/>
     
     <Route path='/props' component={Props}/>
     <Route path='/user' component={User}/>
     <Route path='/Architect' component={Archdash}/>
     <Route path='/allprops' component={Allprops}/>
     <Route path='/Forgotpass' component={Forgotpass}/>
    
     <Route path='/book' component={Book}/>
     <Route path='/report' component={Report}/>
          
 
     <Route path='/edituser' component={Edituser}/>

     <Route path='/customize' component={Customize}/>
     <Route path='/order' component={Order}/>
     
     </Switch>
    
    

      
    </BrowserRouter>
     
     <Footer/>
    
   </>
  );
}

export default Homepage;
