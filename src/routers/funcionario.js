const express = require("express");
const FunController = require("../controllers/FuncionarioController");
const Funcionario = require("../models/Funcionario");
const funController = new FunController(Funcionario);

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const funDTO = req.body;
        const funcionarioSaved = await funController.save(funDTO);
        res.send(funcionarioSaved);
    } catch (e) {
        console.error(e);
        res.status(400).send(error.message);
    }
});

router.get("/", async (req, res) => {
    try {
        console.log('route')
        const funcionarios = await funController.get();
        res.send(funcionarios)
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      await funController.remove(req.params.id);
      res.send(message.success.removeFuncionario);
    } catch (err) {
      res.status(400).send(err);
    }
  });
router.post("/logar", async(req,res) =>{
    funController.logar(req,res)
});

module.exports = router;