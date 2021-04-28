import {React, Component} from 'react'
import Button from '@material-ui/core/Button';

import '../style/menu.css'


class Menu extends Component  {
  constructor(props){
    super(props)
 
      this.handleClick = this.handleClick.bind(this); 
  }
   
  // Add button functions to 
  // 1) Add bot
  // 2) View Bot List



   handleClick = () => {
    // onClickFunction(increment)
  }
 
  render(){
    return( 
       <div id="menu">
         <button className="menu-button" onClick={this.handleClick()}>Create Robot</button>
        
        <button className="menu-button" onClick={this.handleClick()}>View Robots</button>
        
        {/* <button className="button" onClick={this.handleClick()}>Add Robot</button> */}
       </div>
     

    );
  } 

}

export default Menu