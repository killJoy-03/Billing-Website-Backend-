const express = require('express')
const router = express.Router();

const {isAdmin,isShop,isAuthenticated,isSignedIn} = require('../controllers/auth')

const {getBillById,createBill,getBill} = require('../controllers/bill')
const {getCustomerbyId} = require('../controllers/customer')
const {getShopbyId} = require('../controllers/shop')

// params
router.param("shopId",getShopbyId);
router.param("billId",getBillById);

//create
router.post(
    "/bill/create/:shopId",
    isSignedIn,
    isShop,
    createBill
)

// read 

router.get(
    "/bill/:billId",
    getBill
)

module.exports = router;