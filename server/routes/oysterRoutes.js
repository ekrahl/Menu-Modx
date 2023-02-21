const express = require('express');
const router = express.Router();

const { getOysters, setOyster, updateOyster, deleteOyster } = require('../controllers/oysterController')

router.route('/').get(getOysters).post(setOyster)
router.route('/:id').put(updateOyster).delete(deleteOyster)

module.exports = router;