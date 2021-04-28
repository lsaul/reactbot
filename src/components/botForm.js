
import React, {Component} from 'react'
import '../style/form.css'

import data from '../botData.json';

class BotForm extends Component {
  constructor(props){
    super(props)

    this.state=
           { botData: data }  

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.preventDefault = this.preventDefault.bind(this);
}

  
  handleChange(event) {
    
    //gets the name of the input
    let name = event.target.name

    //uses the name of the input to assign value to state
    this.setState({[name]: event.target.value});
    
  }

  handleSubmit() {
    //Creates the new bot info by pulling vallues from state
    
    let newBot = { "bot": this.state.botName,
    "img": "/img/botstarter.png",
    "type": this.state.botType,
    "weight": this.state.botWeight,
    "weapons": this.state.botWeapons}
    
    let botArray = this.state.botData.slice();
    
    botArray.push(newBot);
    
    this.props.botDataUpdate(botArray)

    console.log(botArray) 
    
  }

  preventDefault(event){
    event.preventDefault();
    this.handleSubmit();
  }

  render(){
    return (
      <div id="createContainer">
         <form id="createForm" onSubmit={this.handleSubmit}>
        

        <label>
          Bot Name:
          <input type="text" name="botName"  onChange={this.handleChange} />
        </label>

        <label>
          Type:
          <input type="text" name="botType"  onChange={this.handleChange} />
        </label>
        <label>
          Weight:
          <input type="text" name="botWeight"  onChange={this.handleChange} />
        </label>
        <label>
          Weapon:
          <input placeholder="Comma separated values" name="botWeapons" type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={this.preventDefault}/>
      </form>
      <img src="/img/botstarter.png" />
      </div>
     );
    } 
  }
  
  
export default BotForm