import React, { useState } from 'react'
import './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar';


function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: 'https://www.biography.com/.image/t_share/MTM2MTE2MDQxMjY3ODQ1NTk4/ellen_degeneres_s_bukley_shutterstock_137883089jpg.jpg',
      message: 'Whats up'
    },
    {
      name: 'Ellen',
      image: 'https://www.biography.com/.image/t_share/MTM2MTE2MDQxMjY3ODQ1NTk4/ellen_degeneres_s_bukley_shutterstock_137883089jpg.jpg',
      message: 'How is your day going?'
    },
    {
      message: 'hi Ellen'
    }
  ]);

  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>YOU MATCHED WITH ELLEN ON 01/21/2021</p>
      {messages.map((message) => 
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar 
              className='chatScreen__image' 
              alt={message.name} 
              src={message.image}
              />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )      
     )} {/*end of map */}
      <form className='chatScreen__input'>
        <input className='chatScreen__inputField' type="text" placeholder='Type a message...'/>
        <button className='chatScreen__inputButton'>SEND</button>
      </form>
    </div>
  );
}

export default ChatScreen;
