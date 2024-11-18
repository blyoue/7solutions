import express from 'express';
import { fetchData, transformData } from './utilities.js';
const router = express.Router();
router.get('/departments', async (req, res, err) => {
    const users = await fetchData();
    const departments = transformData(users);
    res.status(200);
    res.send(departments);
});
export { router };
