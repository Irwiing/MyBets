import { Request, Response } from 'express'
import { getConnection } from 'typeorm'

import { User } from '../entity/User';

export default {
    async create(request: Request, response: Response){
        const { username, whatsapp, email } = request.body;
        
        try{
           const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({ 
                    username,   
                    whatsapp,
                    email                 
                })
                .execute();
            return response.json(result.generatedMaps);
        } catch(e){
            return response.json(e)
        }
    }
}