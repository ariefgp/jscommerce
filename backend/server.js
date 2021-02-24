const app = require('./app');
const connectDB = require('./config/database');
const dotenv = require('dotenv');

// config
dotenv.config({ path: 'backend/config/config.env' })

//connect db
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})