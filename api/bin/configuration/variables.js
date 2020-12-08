const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 
        'mongodb+srv://admin:ofood123456@cluster0.qwst3.mongodb.net/ViuvaAlegreDB?retryWrites=true&w=majority'
    }
}

module.exports = variables;