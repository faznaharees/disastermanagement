import React, { Component } from 'react'
import {db,auth} from '../Fire'
import AddUpdates from './AddUpdates'
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }
    Change1 = (e) => { this.setState({  email: e.target.value })  }
    Change2 = (e) => { this.setState({  password: e.target.value })  }
    handleSubmit= (e)=>{
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(this.state.email,this.state.password).then(() =>{
            this.setState({
                loggedin:true,
                email:'',
                password:''
            })
        })
    }
    render(){
        let text=""
        if(this.state.loggedin)
           { text =<AddUpdates/>

     } else
           { text="Admin Area"}
        return(
            <div style={{height:"83vh"}}>
           <center> <form id="login-form" class="home" onSubmit={this.handleSubmit}>
            <div class="input-field">
              <input type="email" value={this.state.email} onChange={this.Change1} placeholder="eg. Johndoe@gmail.com" required />
            </div><br/>
            <div class="input-field">
              <input type="password" value={this.state.password} placeholder="password" onChange={this.Change2} required />
            </div>
            <button class="btn yellow darken-2 z-depth-0">Login</button>
          </form><br/><br/>
         
            {text}<br/><br/><br/><br/><br/><br/>
            </center>
            </div>
        )
    }
}
export default Login;