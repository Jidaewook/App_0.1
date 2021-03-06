const mongoose = require('mongoose');

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose
    .connect(process.env.MONGODB_URL, dbOptions)
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err.message));    