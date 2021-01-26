const productsDB = require('../data/productsDB');

module.exports = {
    renderIndex: (req, res) => {
        let inSale = productsDB.filter(producto => producto.category == 'in-sale');
        let visited = productsDB.filter(producto => producto.category == 'visited');

        res.render('index', {
            title: 'Home Page',
            productsInSale: inSale,
            productsVisited: visited
        });
    }
}