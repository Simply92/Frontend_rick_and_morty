const {Favorite} = require('../DB_connection');

const deleteFav = async(req, res) => {
    try {
        const {id} = req.params;
        await Favorite.destroy({where: {id: id}})
        const allFav = await Favorite.findAll()
        return res.json(allFav)
    
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}

module.exports= deleteFav;