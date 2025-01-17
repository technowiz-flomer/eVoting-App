const express = require('express')
const { createStaff, getStaffs } = require('../controllers/staffController');

const router = express.Router();

router.post('/staff', createStaff);
router.get('/staffs', getStaffs);
// router.update('/staff', updateStaff);
// router.delete('/staff', deleteStaff);

module.exports = router;
