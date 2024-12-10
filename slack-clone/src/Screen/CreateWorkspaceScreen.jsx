import React, { useState } from 'react'
import { crearWorkspace, obtenerWorkspaces } from '../../data'
import { useNavigate } from 'react-router-dom'

const CrearWorkspaceScreen = () => {
    const [error,setError]=useState({text:'',isError:false})
    const navigation = useNavigate()
    const handleSubmit = (evento) => {
        evento.preventDefault()
        const formulario = new FormData(evento.target)

        const workspace = formulario.get('workspace')
        const canal = formulario.get('canal')
        const nuevoWorkspace = {
            name: workspace,
            canales: [
                {
                    name: canal
                }
            ]
        }
        crearWorkspace(nuevoWorkspace)
        console.log(obtenerWorkspaces())
        navigation('/')
        //JSON.stringify = transformar objeto / array a string
        //JSON.parse = transformar string a objeto / array
        /* localStorage.setItem('workspaces', JSON.stringify(nuevoWorkspace))
        let workspaces = JSON.parse(localStorage.getItem('workspaces')) */
   
    }





    return (
        <div>
            <h2>Crear Workspace</h2>

            <form onSubmit={handleSubmit} className='formulario'>



                <label htmlFor='w-space-name'>Nombre del Workspace</label><br />
                <input id='w-space-name' placeholder='Escribe el nombre del Worspace' name='workspace' />
                {error.isError && <span>{error.text} </span>}
                <br /><br />
                <label htmlFor='canal-name'>Nombre del Canal</label><br />
                <input id='canal-name' placeholder='Escribe el nombre del canal' name='canal' />
                {error.isError && <span>{error.text} </span>}
                <br /><br />
                <button>Crear</button>

            </form>
        </div>
    )
}

export default CrearWorkspaceScreen