import express from 'express';
import { router } from './router.js';
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use('/api', router);
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
