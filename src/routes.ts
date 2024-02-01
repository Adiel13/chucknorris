import express, { Router } from 'express';
import search from './classes/search';
const router:Router = express.Router();
const objSearch = new search();
router.use("/search", objSearch.router);

export default router;