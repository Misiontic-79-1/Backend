import express from "express";
const router = express.Router();

import users from "../models/users";
import adminusuarios from "../models/adminusuarios";
import reservas from "../models/reservas";
import Parqueadero from "../models/parqueadero";


// agregar Adminusuario post

router.post("/adminusuarios-nuevo", async (req, res) => {
  const body = req.body;
  try {
    const adminusuariosDb = await adminusuarios.create(body);
    res.status(200).json(adminusuariosDb);
  } catch (error) {
    return res.status(500).json({
      mensaje: "ocurrio un error",
      error
    })
  }
});

// Get con Adminusuarios parámetros

router.get('/adminusuarios/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const adminusuariosDb = await adminusuarios.findOne({ _id });
    res.json(adminusuariosDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con todos los documentos Adminusuario

router.get('/adminusuarios', async (req, res) => {
  try {
    const adminusuariosDb = await adminusuarios.find();
    res.json(adminusuariosDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Delete eliminar un usuario Adminusuarios

router.delete('/adminusuarios/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const adminusuariosDb = await adminusuarios.findByIdAndDelete({ _id });
    if (!adminusuariosDb) {
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(adminusuariosDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Put actualizar un usuario Adminusuario

router.put('/adminusuarios/:id', async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const adminusuariosDb = await adminusuarios.findByIdAndUpdate(
      _id,
      body,
      { new: true });
    res.json(adminusuariosDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// agregar reservas

router.post("/reservas-nuevo", async (req, res) => {
  const body = req.body;
  try {
    const reservasDb = await reservas.create(body);
    res.status(200).json(reservasDb);
  } catch (error) {
    return res.status(500).json({
      mensaje: "ocurrio un error",
      error
    })
  }
});

// Get con parametro reservas

router.get('/reservas/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const reservasDb = await reservas.findOne({ _id });
    res.json(reservasDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con todos los elementos reservas

router.get('/reservas', async (req, res) => {
  try {
    const reservasDb = await reservas.find();
    res.json(reservasDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Delete una reservas

router.delete('/reservas/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const reservasDb = await reservas.findByIdAndDelete({ _id });
    if (!reservasDb) {
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(reservasDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Actualizar una reservas

router.put('/reservas/:id', async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const reservasDb = await reservas.findByIdAndUpdate(
      _id,
      body,
      { new: true });
    res.json(reservasDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Agregar a users 

router.post("/users-nuevo", async (req, res) => {
  const body = req.body;
  try {
    const usersDb = await users.create(body);
    res.status(200).json(usersDb);
  } catch (error) {
    return res.status(500).json({
      mensaje: "ocurrio un error",
      error
    })
  }
});

// Get con parametros users

router.get('/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const usersDb = await users.findOne({ _id });
    res.json(usersDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con todos los documentos users

router.get('/users', async (req, res) => {
  try {
    const usersDb = await users.find();
    res.json(usersDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Delete un usuario users

router.delete('/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const usersDb = await users.findByIdAndDelete({ _id });
    if (!usersDb) {
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(usersDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Put actualizar un usuario users

router.put('/users/:id', async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const usersDb = await users.findByIdAndUpdate(
      _id,
      body,
      { new: true });
    res.json(usersDb);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});


//Crud Parqueadero //

router.post('/nuevo-parqueadero', async (req, res) => {
  const body = req.body;
  try {
      const parqueaderoDb = await Parqueadero.create(body);
      res.status(200).json(parqueaderoDb);
  } catch (error) {
      return res.status(500).json({
          mensaje: 'Ocurrio un error;',
          error
      })
  }
});

// Get con parámetros
router.get('/parqueadero/:id', async (req, res) => {
  const _id = req.params.id;
  try {
      const parqueaderoDb = await Parqueadero.findOne({ _id });
      res.json(parqueaderoDb);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })

  }
});

// Get con todos los documentos
router.get('/consultar-parqueadero', async (req, res) => {
  try {
      const parqueaderoDb = await Parqueadero.find();
      res.json(parqueaderoDb);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
});

// Delete eliminar un parqueadero
router.delete('/parqueadero/:id', async (req, res) => {
  const _id = req.params.id;
  try {
      const parqueaderoDb = await Parqueadero.findByIdAndDelete({ _id });
      if (!parqueaderoDb) {
          return res.status(400).json({
              mensaje: 'No se encontró el id indicado',
              error
          })
      }
      res.json(parqueaderoDb);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
});

// Put actualizar un parqueadero
router.put('/actualizar-parqueadero/:id', async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
      const parqueaderoDb = await Parqueadero.findByIdAndUpdate(

          _id,
          body,
          { new: true });
      res.json(parqueaderoDb);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
});


//Celdas


router.post('/agregar-celda', (req, res) => {
  if (req.body._id) {

      parqueadero.updateMany({ _id: req.body._id }, {
          $push: {
              'celda_carros': {
                  numero_celda: req.body.numero_celda,
                  descripcion: req.body.descripcion
              }
          }
      },
          (error) => {
              if (error) {
                  return res.json({
                      success: false,
                      msj: 'No se pudo agregar el teléfono',
                      err
                  });
              } else {
                  return res.json({
                      success: true,
                      msj: 'Se agregó correctamente el teléfono'
                  });
              }
          }
      )
  } else {
      return res.json({
          success: false,
          msj: 'No se pudo agregar el teléfono, por favor verifique que el _id sea correcto'
      });
  }
});




//crear celda parquedero

router.post('/nueva-celda-carro', async (req, res) => {
  const body = req.body;
  try {
      const parqueaderoDb = await celdasCarros.create(body);
      res.status(200).json(parqueaderoDb);
  } catch (error) {
      return res.status(500).json({
          mensaje: 'Ocurrio un error;',
          error
      })
  }
});



module.exports = router;