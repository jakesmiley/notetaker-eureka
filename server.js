const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//initialize app, create port
const app = express();
const PORT = process.env.PORT || 3001;

//body parsing, middleware, static
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//start server on port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
