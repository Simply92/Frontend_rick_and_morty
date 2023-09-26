const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (res, req) => {
    const {id} = req.params
    axios(URL, id)
    .then(({data}) => {
        const {name, gender, species, origin, image, status} = data
        const character = {id, name, gender, species, origin, image, status}
        
        return character.name
        ? res.status(200).json(character)
        : res.status(404).send('Not found')
    })
    .catch((error) => {
        return res.status(500).send(error.message)
    })
}

module.export= getCharById;













// const axios = require("axios");

// const getCharById = (res, id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data}) => {
//         const {name, gender, species, origin, image, status} = data
//         const character = {id, name, gender, species, origin, image, status}
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         return res.end(JSON.stringify(character))
//     })
//         .catch((error) => {
//         res.writeHead(500, {'Content-Type': 'text/plain'})    
//         return res.end(error.message)
//     })
// }

// module.exports= getCharById;