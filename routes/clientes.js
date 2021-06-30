const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campos');
const { clienteGet, clientePut, clientePost, clienteDelete, clientePatch, clientesGet } = require('../controllers/cliente');
const { emailExiste, nombreusuarioExiste, existeClientePorId } = require('../helpers/db-validators');



const router = Router();


router.get('/', clientesGet );
router.get('/:id',[check('id').custom(existeClientePorId),validarCampos],clienteGet );
router.put('/:id',[check('id').custom(existeClientePorId),validarCampos] ,clientePut );

router.post('/',[
    check('nombre_usuario', 'El nombre es obligatorio').not().isEmpty(),
    check('correo_electronico', 'El correo no es válido').isEmail(),
    check('correo_electronico').custom( emailExiste ),
    check('nombre_usuario').custom( nombreusuarioExiste ),validarCampos]
, clientePost );

router.delete('/', clienteDelete );

router.patch('/', clientePatch );





module.exports = router;