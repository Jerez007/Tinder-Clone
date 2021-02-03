import React from 'react'
import './Chats.css';
import Chat from './Chat';

function Chats() {
  return (
    <div className="chats">
      <Chat 
        name= 'Ellen'
        message= 'YO whats up'
        timestamp= '40 seconds ago'
        profilePic= 'https://www.biography.com/.image/t_share/MTM2MTE2MDQxMjY3ODQ1NTk4/ellen_degeneres_s_bukley_shutterstock_137883089jpg.jpg'
      />
      <Chat 
        name= 'Emma'
        message= 'hi'
        timestamp= '1 hour ago'
        profilePic= 'https://celebmafia.com/wp-content/uploads/2019/02/emma-watson-g7-gender-equality-advisory-council-meeting-in-paris-02-19-2019-12.jpg'
      />      
      <Chat 
        name= 'Jennifer'
        message= ':)'
        timestamp= '2 days ago'
        profilePic= 'https://media4.s-nbcnews.com/j/newscms/2017_18/1212530/jennifer-lawrence-2014-today-170505_898c2e89d6538a5cdd18455d3799e308.fit-760w.jpg'
      />      
      <Chat 
        name= 'Shakira'
        message= 'ola senor. como estas?'
        timestamp= '5 days ago'
        profilePic= 'https://s1.ibtimes.com/sites/www.ibtimes.com/files/2011/02/25/68419-shakira.jpg'
      />         
    </div>
  )
}

export default Chats;
