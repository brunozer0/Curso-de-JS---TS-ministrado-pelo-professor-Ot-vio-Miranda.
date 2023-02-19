import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);
export default router;

/*
Podemos ter até 5 métodos em cada controller.

Index = lista todos os usuários. -> get

store/create = cria um novo usuario ->post

delete = apaga um usuario. -> delete

Show = mostra novo usuário. -> get

Update= atualiza um usuário. -> patch ou put

*/
