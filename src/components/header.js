import React, {Component} from 'react';
import '../css/styles.css';

const getYear = ()=>{
    const newDate = new Date();
    return newDate.getFullYear();
}
const user = {
    name: 'hoang',
    lastname: 'phuc',
    age: 26
}

var header = {
    render:function(){
        return ''
    }
}



class Header extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            title:'The keywords are: ',
            keywords: ''
        }
    }    

    inputChangeHandler(event){
        //console.log(event.target.value);
        this.setState({
            keywords: event.target.value
        })
    }

    render(){   
        console.log(this.state.keywords)     
        return (
            // <div>
            //     <span>{user.name} </span>
            //     <span>{user.lastname} </span>
            //     <span>{user.age}</span>
            // </div>
            <header>
                <div className="logo">
                    Logo
                </div>
                <input type="text" onChange={this.inputChangeHandler.bind(this)}/>
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
        )
    }
    
}

export default Header