import express from 'express'
import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog} from '../controllers/BlogController.js'
const router = express.Router()

//Obtiene todos los registros de todos los blogs desde el BlogController.js
router.get('/', getAllBlogs)

//Obtiene el registro de un blog swegún su id desde el BlogController.js
router.get('/:id', getBlog)

//Publica un nuevo blog desde el BlogController.js
router.post('/', createBlog)

//Actualiza el registro de un blog según su id desde el BlogController.js
router.put('/:id', updateBlog)

//Elimina un blog según su ID desde el BlogController.js
router.delete('/:id', deleteBlog)

export default router