import React, { Component } from 'react'
import {db} from '../Fire'
class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            contact:'',
            sem:'',
            dept:''
        }
    }
     
    handleSubmit = (e) =>{
        console.log(e)
            e.preventDefault();
            db.collection('details').add({
                 firstName:this.state.firstName,
                 lastName:this.state.lastName,
                 email:this.state.email,
                 contact:this.state.contact,
                 sem:this.state.sem,
                 dept:this.state.dept,

            })
            
            this.setState({
                firstName :'',
            
            
            lastName : '',
            email : '',
            contact : '',
            sem : '',
            dept : ''})
        };

        Change1 = (e) => { this.setState({  firstName: e.target.value })  }
        Change2 = (e) => { this.setState({  lastName: e.target.value })  }
        Change3 = (e) => { this.setState({  email: e.target.value })  }
        Change4 = (e) => { this.setState({  contact: e.target.value })  }
        Change5 = (e) => { this.setState({  sem: e.target.value })  }
        Change6 = (e) => { this.setState({  dept: e.target.value })  }



    render(){
       
        return(
            <div>
                <center>
                <h3>
                Register Here</h3><br/><br/>
                <form id="create-form" onSubmit={this.handleSubmit}>
                <label><input type="text" id="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.Change1}/></label><br/><br/>
                <label><input type="text" id="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.Change2}/></label><br/><br/>
                <label><input type="email" id="email" value={this.state.email} placeholder="eg. Johndoe@gmail.com" onChange={this.Change3}/></label><br/><br/>
                <label><input type="text" id="phone" value={this.state.phone} placeholder="Contact Number" onChange={this.Change4}/></label><br/><br/>
                <label><input type="number" id="sem" value={this.state.sem} placeholder="SEM" onChange={this.Change5}/></label><br/><br/>
                <label><input type="text" id="dept" value={this.state.dept} placeholder="Department" onChange={this.Change6}/></label><br/><br/>
                <button>Submit</button>


                </form>
                </center>
            </div>
        
        )
    }
}
export default Register;