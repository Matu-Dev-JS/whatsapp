import MessageRepository from "../repositories/message.repository.js"

const createMessage = async (req, res) => {
    try{
        const user_id = req.user.id
        const {receiver_id, content} = req.body

        const new_message = await MessageRepository.createMessage({author: user_id, receiver: receiver_id, content: content})

        //Podrian retornar toda la conversacion

        //const conversation = await MessageRepository.findMessagesBetweenUsers(user_id, receiver_id)

        return res.status(201).json({
            ok: true,
            status: 201,
            message: 'Message created',
            data: {
                message: new_message
            }
        })
    }
    catch(error){
        console.error(error)
        return res.status(500).json({
            ok: false,
            status: 500,
            message: 'Internal server error'
        })
    }
}

const getConversation = async (req, res) => {  
    try{
        const user_id = req.user.id
        const {receiver_id} = req.params
        const conversation = await MessageRepository.findMessagesBetweenUsers(user_id, receiver_id)
        return res.status(200).json({
            ok: true,
            status: 200,
            message: 'Conversation found',
            data: {
                conversation
            }
        })
    }
    catch(error){
        console.error(error)
        return res.status(500).json({
            ok: false,
            status: 500,
            message: 'Internal server error'
        })
    }
}

export {createMessage, getConversation}