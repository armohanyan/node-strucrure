import { SuccessHandlerUtil } from "../utils"
import { UserService } from "../services";
export default class UserController {
    static async getUser(req,res,next){
        try {
            const userData = await UserService.getUser();
            SuccessHandlerUtil.handleList(res, req, userData);
        } catch (error) {
            next(error)
        }
    }
    static async addUser(req,res,next){
        try {
            const x = req.body
            const userData = await UserService.addUser(x);
            SuccessHandlerUtil.handleList(res, req, userData);
        } catch (error) {
            next(error)
        }
    }
}