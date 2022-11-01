const express = require('express');
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser')

app.use(cors(), express.json(), express.urlencoded({ extended: true }))

require('dotenv').config()
require('./config/mongoose.config')

require('./routes/post.routes')(app)
require('./routes/user.routes')(app)

app.listen(8000, () => console.log('Listening on PORT 8000') );