import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// -> Não deveria existir, a não ser que seja requisitado perfil do usuário

// router.get('/:id', UserController.show);
// router.get('/', loginRequired, UserController.index); // lista usuário

router.post('/', UserController.store); // LISTA DE USUÁRIOS

router.put('/', loginRequired, UserController.update); // utilizando token de autenticação

router.delete('/', loginRequired, UserController.delete);

export default router;

/*
Podemos ter até 5 métodos em cada controller.

Index = lista todos os usuários. -> get

store/create = cria um novo usuario ->post

delete = apaga um usuario. -> delete

Show = mostra novo usuário. -> get

Update= atualiza um usuário. -> patch ou put

*/
