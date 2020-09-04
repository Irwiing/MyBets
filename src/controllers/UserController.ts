import { Request, Response } from 'express'
import { getConnection } from 'typeorm'

import { User } from '../entity/User';

export default {
    async index(request: Request, response: Response){

    },
    
    async create(request: Request, response: Response){
        const { username, whatsapp, email } = request.body;
        
        try{
           const { identifiers } = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({ 
                    username,   
                    whatsapp,
                    email                 
                })
                .execute();
            return response.status(200).json(identifiers);
        } catch(e){
            return response.json(e)
        }
    }
}