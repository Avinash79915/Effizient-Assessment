const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        const response = mongoose.connect("mongodb+srv://avinash:avinash123@avinash.lv2cecy.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        if (response) { console.log('MongoDB connected...') }
    } catch (err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB