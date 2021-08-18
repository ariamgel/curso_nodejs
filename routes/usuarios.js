const {Router} = require("express");
const { 
    usuariosGet, 
    usuariosPost, 
    usuariosPut, 
    usuariosDelete 
} = require("../controllers/usuarios");

const router = Router();

//localhost:3001/usuarios/
router.get('/', usuariosGet);
router.post('/', usuariosPost);
router.put('/:id', usuariosPut);
router.delete('/', usuariosDelete);

module.exports = router;