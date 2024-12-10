import React from 'react'
import ChannelList from './Components/ChannelList/ChannelList'
import Chatlist from './Components/ChatList/ChatList'
import { Route, Routes } from 'react-router-dom'
import CrearWorkspaceScreen from './Screen/CreateWorkspaceScreen'
import WorkspaceScreen from './Screen/WorkspaceScreen'
import WorkspacesScreen from './Screen/WorkspacesScreen'

function App() {

  


  return (
    <>
    <Routes>
      {/* El workspace */}
      <Route path="/" element={<WorkspacesScreen/>}/>
      <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
      {/* Este el formulario para crear workspace */}
      <Route path="/new" element={<CrearWorkspaceScreen/>}/>
    </Routes>

    </>
  )
}

export default App
/* 
MERN = MongoDB Express React NodeJS
*/