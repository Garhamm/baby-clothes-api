const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName' :'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName' :'Chancelor Whatever',
        'birthLocation': 'Chicago, Illinois'
    },
    'snoop dogg': {
        'age': 60,
        'birthName' :'Snoop Dogg',
        'birthLocation': 'Compton'
    },
    'unknown': {
        'age': 0,
        'birthName' :'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/',(request, response) => {
    response.sendFile(__dirname + '/index.html')
})

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