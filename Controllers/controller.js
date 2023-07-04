import { Producto } from "../Models/productos.js";
import { Pedido } from "../Models/pedidos.js";
import { Usuario } from "../Models/usuarios.js";
import { Sequelize } from "sequelize";

const getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const getProducto = async (req, res) => {
  const { idProducto } = req.params;
  try {
    const producto = await Producto.findByPk(idProducto);
    res.status(200).json([producto]);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postProductos = async (req, res) => {
  const { nombre, detalle, cantidad, categoria, precio, imagen } = req.body;

  try {
    const newProducto = await Producto.create({
      nombre,
      detalle,
      cantidad,
      categoria,
      precio,
      imagen,
    });
    res.status(200).json(newProducto);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const putProductos = async (req, res) => {
  const { idProducto } = req.params;
  const { nombre, detalle, cantidad, categoria, precio, imagen } = req.body;
  try {
    const oldProducto = await Producto.findByPk(idProducto);
    oldProducto.nombre = nombre;
    oldProducto.detalle = detalle;
    oldProducto.cantidad = cantidad;
    oldProducto.categoria = categoria;
    oldProducto.precio = precio;
    oldProducto.imagen = imagen;
    const modProducto = await oldProducto.save();
    res.status(200).json(modProducto);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const deleteProductos = async (req, res) => {
  const { idProducto } = req.params;
  try {
    const respuesta = await Producto.destroy({
      where: {
        idProducto,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};

const getPedido = async (req, res) => {
  const { idPedido } = req.params;
  try {
    const pedido = await Pedido.findByPk(idPedido);
    res.status(200).json([pedido]);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postPedidos = async (req, res) => {
  const { detalle, cantidad, fecha } = req.body;

  try {
    const newPedido = await Pedido.create({
      detalle,
      cantidad,
      fecha,
    });
    res.status(200).json(newPedido);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const putPedido = async (req, res) => {
  const { idPedido } = req.params;
  const { detalle, cantidad, fecha } = req.body;
  try {
    const oldPedido = await Pedido.findByPk(idPedido);
    oldPedido.detalle = detalle;
    oldPedido.cantidad = cantidad;
    oldPedido.fecha = fecha;
    const modPedido = await oldPedido.save();
    res.status(200).json(modPedido);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const deletePedido = async (req, res) => {
  const { idPedido } = req.params;
  try {
    const respuesta = await Pedido.destroy({
      where: {
        idPedido,
      },
    });
    res.status(200).json({ mensaje: "Pedido Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Pedido No Eliminado" + error });
  }
};

// Operaciones con los usuarios


const getUsuario = async (req, res) => {
  const { idUsuario } = req.params;
  try {
    const usuario = await Usuario.findByPk(idUsuario);
    res.status(200).json([usuario]);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postUsuarioLogin = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({
      where: { correo: correo, contrasena: contrasena },
    });
    if (!usuario) {
      return res.status(401).json({ mensaje: "Credenciales inválidas correo" });
    }

    if (usuario.contrasena !== contrasena) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

const postUsuarios = async (req, res) => {
  const { nombre, direccion, correo, contrasena, tipo } = req.body;
  try {
    const newUsuario = await Usuario.create({
      nombre,
      direccion,
      correo,
      contrasena,
      tipo,
    });
    res.status(200).json(newUsuario);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

export {
  getProductos,
  getProducto,
  postProductos,
  putProductos,
  deleteProductos,
  getPedidos,
  getPedido,
  postPedidos,
  putPedido,
  deletePedido,
  getUsuario,
  postUsuarios,
  postUsuarioLogin
};
