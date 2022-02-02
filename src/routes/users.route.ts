//Métodos a serem implementados

// get /users
// get /users/:uuid
// post /users
// post /users/:uuid 
// delete /users/:uuid 

import { Router, Response, Request, NextFunction } from "express";

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users= [{ userName: 'Pedro' }];
    res.status(200).send({ users });
});

export default usersRoute;