import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter ,Switch ,Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <div className="">
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/updates' component={Projects}/>
       <Route path='/login' component={Login}/>
       <Route path='/contact' component={Contact}/>
       <Route path='/register' component={Register}/>
     </Switch>
     </div>
     <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
