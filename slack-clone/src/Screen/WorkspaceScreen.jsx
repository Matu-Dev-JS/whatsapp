import React from 'react'
import Chatlist from '../Components/ChatList/ChatList'
import ChannelList from '../Components/ChannelList/ChannelList'
import { useParams } from 'react-router-dom'
import { obtenerWorkspacePorId } from '../../data'

const WorkspaceScreen = () => {
    const {workspace_id} = useParams()
    //OBTENEMOS EL WORKSPACE POR ID
    const workspace = obtenerWorkspacePorId(workspace_id)
    console.log(workspace.channels)
    const mensajes = [
        {
            hour: '11:06 PM',
            author: 'Pepe suarez',
            text: 'Hola a todos!',
            id: 1
        },
        {
            hour: '11:05 AM',
            author: 'Martina Sanchez',
            text: 'Que tal?',
            id: 2
        },
        {
            hour: '11:17 AM',
            author: 'Juancito',
            text: 'Muy mal, no se nada de HTML para el examen',
            id: 3
        }

    ]

    const canales = [
        {
            id: 1,
            nombre: 'Consultas'
        },
        {
            id: 2,
            nombre: 'General'
        },
        {
            id: 3,
            nombre: 'Tareas'
        }
    ]
    return (
        <div>
            <h1>{workspace.name}</h1>
            <Chatlist mensajes={mensajes} />
            <ChannelList canales={workspace.channels} titulo={'canales importantes'} />
            
        </div>
    )
}

export default WorkspaceScreen