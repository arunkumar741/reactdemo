import React ,{Component} from 'react';
import  '../stylesheets/style.scss';
import {button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Createcomp extends Component{
    state = {
        toggle:true
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
render(){
    return(
     <div className="container">
       <h2>  Hello world</h2>
         { this.state.toggle &&  
            <span className="textname">New world </span>
         }
         <div>
         <button className="btn btn-primary btn1" onClick={ this.toggle }>click to change</button>
         </div>
         
         
     </div>   
    )
}
}
export default Createcomp;