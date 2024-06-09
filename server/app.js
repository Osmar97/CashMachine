const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

dotenv.config();

app.use(bodyParser.json());


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/cash-register', require('./routes/cashRegisterRoutes'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
