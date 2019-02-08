import { Request, Response } from 'express';


import pool from '../database';

class BrastlewarksController { 

	public async list(req: Request, res: Response): Promise<void> {
        const gnomes = await pool.query('SELECT * FROM gnome');
        res.json(gnomes);
        console.log("Get all success full");
    }

	public async getOne(req: Request, res: Response): Promise<any>{
		const { id } = req.params;
		const gnome = await pool.query('SELECT * FROM gnome WHERE id = ?', [id]);
		console.log(gnome.length);
		if  (gnome.length > 0){
			return res.json(gnome[0]);
		}
		res.status(404).json({ text: "in the gnome this gnome doesn't exists"});
	}
	public async create(req: Request, res: Response): Promise<void> { 
		const result = await pool.query('INSERT INTO gnome set?', [req.body]);
		res.json({ message: 'Gnome Saved '});
	}
	public async update(req: Request, res: Response):Promise<void> {
		const { id } = req.params;
		const oldGnome = req.body;
		await pool.query('UPDATE gnome set ? WHERE id = ?', [req.body]);
		res.json({ message: "The Gnome was updated"})
	}
	public async delete(req: Request, res:Response):Promise<void>{
		const { id } = req.params;
		await pool.query('DELETE FROM gnome WHERE id = ? ', [id]);
		res.json({message: "The gnome was deleted" })
	}

};

const brastlewarksController = new BrastlewarksController;
export default brastlewarksController;