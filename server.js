const express = require('express');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB =  require ('./config/dbConfig');
const app = express();

dotenv.config();

connectDB();

require('./models/user');
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));




