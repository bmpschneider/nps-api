import { request, Request, response, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UserRepository';
import * as yup from 'yup';

class UserController {
  async create(req: Request, res: Response) {
    const { name,  email } = req.body;

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({error: "Validation Failed!"});
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if(userAlreadyExists) {
      return res.status(400).json({
        error: "User Already Exists!"
      })
    }

    const user = usersRepository.create({
      name, email
    })

    await usersRepository.save(user);

    return res.status(201).json(user);
  }
}

export { UserController };
