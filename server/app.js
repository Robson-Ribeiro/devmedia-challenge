import express from 'express';

import homeRoutes from './src/routes/homeRoutes.js'
import postRoutes from './src/routes/postRoutes.js';

import path from 'path';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.setApp();
        this.connectDB();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(express.static('./src/views/css'));
        this.app.use(express.static('./src/views/icon'));
    }
    
    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/post', postRoutes);
    }

    setApp() {
        this.app.set('views', './src/views');
        this.app.set('view engine', 'ejs');
    }

    connectDB() {

    }
}

export default new App().app;
