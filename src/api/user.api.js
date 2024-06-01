import  express  from "express";
import { UserController } from "../controller";
const router  = express.Router();
router.get('/', UserController.getUser );
router.post('/', UserController.addUser );

export default router