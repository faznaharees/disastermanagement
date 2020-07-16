import React, { Component } from 'react'
import {db} from '../Fire'
class Projects extends Component{
    
   constructor(props){
       super(props)
       this.state = {
        links:[]
    }
   }
    componentDidMount(){
        console.log("mounted")
        db.collection('updates').get().then( snapshot => {
         
          const links = []
          snapshot.forEach(doc =>{
              const data =doc.data()
              links.push(data)
          })  
          this.setState({links:links})
        }).catch(error => console.log(error))}
    
    render(){
//         const listItems =this.state.links.map((links) =>  
//             return <li>{links}</li>  
//   ); 
        return(
            <div className="container">
            {console.log(this.state.links)}
            {this.state.links.map(({title,content})=>
            (<div class="updates"><h1>{title}</h1><p>{content}</p></div>))}
            </div>
        )
    }
}
export default Projects;