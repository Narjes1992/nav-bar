import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      showMenu: false,
      class:'drop'
    }
  }
  showMenu=(event)=> {
    event.preventDefault();
    if(this.state.class==='drop'){
      this.setState({
        showMenu: true,
        class:'up'
      });
    }
    if(this.state.class==='up'){
      this.setState({
        class:'drop'
      })
    }
   
  }
  
  render() { 
    return ( 
       <div className="div1">
         <ul className="nav-menu">
           <li className="home">Home</li>
           <li className="serv" onClick={this.showMenu}>Services 
             <div className={ this.state.class }>
               <a href="#"> For entrepreneurs</a>
               <a href="#"> For Students</a>
               <a href="#"> For hobbyists</a>
             </div> 
           
           </li>
           <li className="cont">Contact</li>
         </ul>
       </div>
     );
  }
}
 
export default App ;