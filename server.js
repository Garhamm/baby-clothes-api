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
app.get('/api:name',(request,response) =>{
    const rapperName = request.params.name.toLocaleLowerCase()
    
    if( rappers[rapperName] ) {
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['uknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})