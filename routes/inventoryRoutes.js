const exxpress = require('exxpress');
const inventoryController = require('../controllers/inventoryController');
const router = express.Router();

router.get('/', inventoryController.getInventory);
router.post('/add', inventoryController.addProduct);
router.post('/update:id', inventoryController.updateProduct);
router.post('/delete:id', inventoryController.deleteProduct);

module.exports = router;