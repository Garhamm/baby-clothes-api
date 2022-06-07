document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=38.98&lon=-94.67&appid=4002060b1a81792c61fbc96fe60db2d0`)
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}   