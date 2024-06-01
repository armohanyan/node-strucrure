import {Model} from 'objection';

import bCrypt from 'bcryptjs';
import { ErrorsUtil, CryptoUtil } from '../utils';

import knexConfigs from '../../knex.configs';
class UsersModel extends Model{
    static get idColumn() {return 'id';}

    static get tableName() {return 'user';}

    static get jsonSchema() {
        return {
            type:'object',
            required: [],
            properties: {
                id: {type:'integer'},
              
            }
        }
    }


$beforeInsert(){
    const date = new Date();
    this.created_at = date
}
$beforeUpdate(){
    const date = new Date();
    this.updated_at = date
}
static getUser() {
    return UsersModel.query().select('*');
  }
  static addUser(x) {
    return UsersModel.query().insert(x);
  }



}
export default UsersModel;