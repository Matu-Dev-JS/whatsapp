import {v4 as uuidv4} from 'uuid'
const workspaces_estado_incial = [
    {
        id: 1,
        name: 'Workspace 1',
        description: 'Workspace 1 description', //opcional
        img: 'https://picsum.photos/id/237/200/300', //opcional
        channels: [
            {
                id: 1,
                name: 'Canal 1',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?'
                    }
                ]
            },
            {
                id: 2,
                name: 'Consultas',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Workspace 1',
        description: 'Workspace 1 description', //opcional
        img: 'https://picsum.photos/id/237/200/300', //opcional
        channels: [
            {
                id: 1,
                name: 'Canal 1',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?'
                    }
                ]
            },
            {
                id: 2,
                name: 'Consultas',
                messages: [
                    {
                        id: 1,
                        author: 'Pepe',
                        text: 'Hola'
                    },
                    {
                        id: 2,
                        author: 'Pepe 2',
                        text: 'Que tal?'
                    }
                ]
            }
        ]
    }
]




const obtenerWorkspaces =() => {
    let workspaces = localStorage.getItem('workspaces')
    //Si hay workspaces, lo transformo a JSON
    if(workspaces){
        return JSON.parse(workspaces)
    }
    //Sino hay
    else{
        //Guardo en local storage el valor inicial de mis workspaces
        localStorage.setItem('workspaces', JSON.stringify(workspaces_estado_incial))
        return workspaces_estado_incial
    }
}

const crearWorkspace = (nuevoWorkspace) => {
    nuevoWorkspace.id = uuidv4()
    //Genero un id
    //uuidv4()
    let workspaces = obtenerWorkspaces()
    workspaces.push(nuevoWorkspace)
    localStorage.setItem('workspaces', JSON.stringify(workspaces))
}

const obtenerWorkspacePorId = (id) => { 
    let workspaces = obtenerWorkspaces()
    let workspace = workspaces.find(workspace => workspace.id == id)
    return workspace
}

export {obtenerWorkspaces, crearWorkspace, obtenerWorkspacePorId}