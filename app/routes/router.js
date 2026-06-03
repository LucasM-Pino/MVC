const express = require("express");
const router = express.Router();
const tarefasController = require("../controllers/tarefasController");

router.get("/", tarefasController.listarTarefas);
router.get("/adicionar", tarefasController.exibirFormAdicionar);
router.post("/adicionar", tarefasController.regrasValidacao, tarefasController.adicionarTarefa);
router.get("/editar", tarefasController.exibirTarefaId);
router.get("/excluir", tarefasController.excluirTarefa);
router.get("/finalizar", tarefasController.finalizarTarefa);
router.get("/iniciar", tarefasController.iniciarTarefa);

module.exports = router;