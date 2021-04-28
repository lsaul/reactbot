import React, {Component} from 'react'
import Menu from './components/Menu'
import BotForm from './components/botForm'
import BotList from './components/botList'
import Button from './components/menuButton'
import data from './botData.json';

import './style/style.css';



class App extends Component {
  constructor(props){
    super(props)
    this.state= { 
      botList: data,
      screen: "home" 
    }

          this.screenHome = this.screenHome.bind(this)
          this.screenCreate = this.screenCreate.bind(this)
          this.screenList = this.screenList.bind(this)
  }
 
  botDataUpdate = (botData) =>{
      // Updates the bot data from the form / child component

     this.setState({botList: botData})
     
     //Let's see the data to ensure update
     console.log(this.state.botList)
    }

  screenHome = () => { 
    this.setState({
      screen: 'home'
    })
  }

  screenCreate = () => {
    this.setState({
      screen: 'create'
    })
  }

  screenList = () => {
    this.setState({
      screen: 'list'
    })
  }
  

  render(){
    let screen = this.state.screen
    
    let screenState = () => {

      if(screen=="home"){
        console.log(screen)
        return <header className='App-header'> <div id='bb-logo'> </div></header>
      }else if(screen=="list"){
        return <BotList botList={this.state.botList}/>
      }else if(screen=="create"){
        return <BotForm botDataUpdate={this.botDataUpdate}/>
      } 

    }
 

    return (
      

      <div className="App"> 

          {screenState()} 
        
          
           {/* Add button functions to update state of App */}
  
           <div id="menu">
            <Button handler={this.screenHome} text="Home"/>

            <Button handler={this.screenCreate} text="Create Bot"/>

            <Button handler={this.screenList} text="View Bots"/>
           </div>

  
      </div>
    );
  }


}

export default App;
