import React, {Component} from 'react';
// import data from '../botData.json';

import '../style/botlist.css';


class BotList extends Component {
    constructor(props){
        super(props)

        this.state=
           { botData: this.props.botList } 

        this.deleteBot = this.deleteBot.bind(this);
    }


    deleteBot = () => {
        //Delete Current Bot
    }


    render(){ 

        let botList = this.state.botData;

        return(
            <div id="botList">
                {botList.map((item, index) => (
                    <div key={index} class="botCard">
                          <img src={item.img} class="botimg"/>
                          <p><strong>Name:</strong> {item.bot}</p> 
                          <p><strong>Type:</strong> {item.type}</p> 
                          <p><strong>Weight Class:</strong> {item.weight}</p>
                          <p><strong>Weapons:</strong> {item.weapons}</p>
                    </div> 
                )
            )}
            </div>
        ) ;
        
    }


}

export default BotList;