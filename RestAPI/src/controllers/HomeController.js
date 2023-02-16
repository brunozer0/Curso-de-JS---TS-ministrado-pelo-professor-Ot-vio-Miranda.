import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Juliana',
      sobrenome: 'magalhaes',
      email: 'juliana@gmail.com',
      idade: '35',
      peso: '65',
      altura: '1.57',
    });
    res.json(novoAluno);
  }
}

export default new
HomeController();
