import {UserModel} from "../models"
export default class UserService {
    static async getUser() {
        return UserModel.getUser()
    }
    static async addUser(x) {
        return UserModel.addUser(x)
    }
}