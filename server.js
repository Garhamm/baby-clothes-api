const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

// Serves the index.html to the client
app.get('/',(request, response) => {
    response.sendFile(__dirname + '/index.html')
})
// Fetches the weather API information
app.get('/',(request,response) =>{
    const rapperName = request.params.name.toLocaleLowerCase()
    
    if( rappers[rapperName] ) {
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['uknown'])
    }
})

// Need a response to fetch the weather api and return it to the client. 

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})