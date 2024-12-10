import User from "../models/user.model.js";

class UserRepository {
    static async createUser(user_data) {
        return User.create(user_data)
    }
    static async addContact(user_id, contact_id){
        //El contact_id debe pertenecer a un usuario real
        return User.findByIdAndUpdate(user_id, {
            $push:{
                contacts: contact_id
            }
        })
    }
    static async findUserById (user_id){
        return User.findById(user_id)
    }
    static async findUserByUsername (username){
        return User.findOne({username: username})
    }

    static async findContacts(user_id){
        return User.findById(user_id).populate('contacts', 'username')
    }
}


export default UserRepository