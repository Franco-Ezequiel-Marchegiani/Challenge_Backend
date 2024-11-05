import { Router } from 'express';
import { homeController } from '../controllers/homeController.js';
import {  getCountry,  } from '../controllers/countriesController.js';

const router = Router();

/* Rutas con Data de la API */

// Ruta principal
router.get('/', homeController);

// Ruta para obtener datos de la API de cervecerías

router.get('/country/:countryCode', getCountry);




export default router;