import express from 'express';
import { registrar,
    perfil,
    confirmar,
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    actulizarPerfil,
    actualizarPassword
} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

// área pública
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword)
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

// área privada
router.get('/perfil', checkAuth, perfil);
router.put('/perfil/:id', checkAuth, actulizarPerfil)
router.put('/actulizar-password/', checkAuth, actualizarPassword)

export default router;