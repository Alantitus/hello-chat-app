import io from 'socket.io-client'

import './App.css'
import { useState } from 'react'
import Chats from './Chats'

const socket =io.connect("https://hello-chat-server.onrender.com")
function App() {
const [username,setUsername]=useState("")
const [room,setRoom]=useState("")
const[showChat,setShowChat]=useState("")

const joinRoom=()=>{
if(username!=="" && room!==""){
  socket.emit("join_room",room)
  setShowChat(true)
}
}
  return (
    <div className='app'>
      {!showChat ?(
     <div className='joinChatContainer'>
        <h3 className='title'><i class="fa-solid fa-message"></i> Hello</h3> 
        <h5 className='title'>Join to chat with hello</h5>
        <input type="text" placeholder='Enter your name' onChange={(event)=>{setUsername(event.target.value)}} />
        <input type="text" placeholder='Enter room id' onChange={(event)=>{setRoom(event.target.value)}}/>
        <button onClick={joinRoom}>Join a Room</button>
        </div>)
        :
        <Chats socket={socket} username={username} room={room}/>
      }
    </div>
   
  )
}

export default App
