
require('dotenv').config()
const express = require('express')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const sequelize = require('./database')
const app = express();
const authRoutes = require('./routes/authRoutes');



app.use(express.json());
app.use('/api/v1', authRoutes);

// Configure Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 7000;

const start = async()=>{
  try{
      await sequelize.authenticate()
      await sequelize.sync()
      app.listen(port,()=>console.log(`Server running on port ${port}`))
    }
    catch(e){
      console.error('Unable to connect to the database:', e);
    }
}

start()