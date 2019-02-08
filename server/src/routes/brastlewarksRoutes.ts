import express, { Router } from 'express';

import brastlewarksController from '../controllers/brastlewarksController';


class BrastlewarksRoutes { 

	router: Router = Router();

	constructor(){
		this.config();
	}

	config() {
		this.router.get('/', brastlewarksController.list);
		this.router.get('/:id', brastlewarksController.getOne);
		this.router.post('/', brastlewarksController.create);
		this.router.put('/:id', brastlewarksController.update);
		this.router.delete('/:id', brastlewarksController.delete);
	}
}

export default new BrastlewarksRoutes().router;
