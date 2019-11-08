const ninja_gold = require('../controllers/ninja_gold.js');



module.exports = function (app) {
    app.get('/', ninja_gold.index );
}