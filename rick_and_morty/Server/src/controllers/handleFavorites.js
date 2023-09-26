let myFavorites = [];

const postFav = (req, res) => {
     const character = req.body;
    // if(character){
    //     myFavorites.push(character)
    // }
    // return res.json(myFavorites)
    myFavorites.push(character)
     res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id} = req.params;
    const filtro = myFavorites.filter(char => {
        char.id !== Number(id)
    })
    return res.status(200).json(filtro)
}

module.export= {
    postFav, 
    deleteFav
}