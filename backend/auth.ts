import {Request, Response} from 'express'
import {User, users} from './users'
import * as jwt from 'jsonwebtoken'
import { apiConfig } from './api-config'

export const handleAuthentication = (req: Request, resp: Response)=>{
    let user: User = req.body
    console.log(user)
    if(isValid(user)){
        const dbUser= users[user.email]
        const token = jwt.sign({sub: dbUser.email, iss: 'meat-api'}, 'meat-api-password')
           apiConfig.SECRET
        resp.json({name: dbUser.name, email: dbUser.email, accessToken: token})
    }else{
        resp.status(403).json({message: 'Dados inválidos'})
    }
}


function isValid(user: User): boolean{
    if(!user){
        return false 
    }
    const dbUser = users[user.email]
    return dbUser !== undefined && dbUser.matches(user)
}
