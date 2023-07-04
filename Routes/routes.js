//Manejador de rutas
import {Router} from "express";
import { getProductos, postProductos, putProductos, deleteProductos, getProducto, getPedidos, postPedidos, putPedido, deletePedido, getUsuario, postUsuarios, getPedido, postUsuarioLogin } from '../Controllers/controller.js';

const router = Router();

//Definir Rutas
router.get("/",(req, res)=> {
  res.send("GET Pagina Principal Express")
});

router.get("/productos", getProductos);
router.get("/productos/:idProducto", getProducto);
router.post("/productos",postProductos);
router.put("/productos/:idProducto",putProductos);
router.delete("/productos/:idProducto", deleteProductos);

router.get("/pedidos", getPedidos);
router.get("/pedidos/:idPedido", getPedido);
router.post("/pedidos",postPedidos);
router.put("/pedidos/:idPedido",putPedido);
router.delete("/pedidos/:idPedido", deletePedido);

router.get("/registro/usuarios/:idUsuario", getUsuario);
router.post("/registro/usuarios",postUsuarios);
router.post("/acceder",postUsuarioLogin);


export default router;