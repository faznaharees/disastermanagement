
import React, { Component } from 'react'
import {db} from '../Fire'
export default class AddUpdates extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            content:''
        }
    }
     
    handleSubmit = (e) =>{
        console.log(e)
            e.preventDefault();
            db.collection('updates').add({
                 title:this.state.title,
                 content:this.state.content,
            })
          this.setState({
                title :'',
             content : '',
           })
        };

        Change1 = (e) => { this.setState({  title: e.target.value })  }
        Change2 = (e) => { this.setState({  content: e.target.value })  }

    render() {
        return (
            <div>
            <center><form onSubmit={this.handleSubmit}>
            <input type="text" id="title" placeholder="title" value={this.state.title} onChange={this.Change1}/><br/><br/>
            <input type="textarea" id="content" placeholder="content" value={this.state.content} onChange={this.Change2}/><br/><br/>
            <button>Submit</button></form>
            </center>
            </div>
        )
    }
}
