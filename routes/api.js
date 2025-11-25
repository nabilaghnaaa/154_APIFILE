// routers/api.js
const express = require('express');
const router = express.Router();
const multer = require('multer');

const komikController = require('../controllers/komikController');

// Setup multer untuk upload gambar (disimpan di memory)
const upload = multer({ storage: multer.memoryStorage() });

// ====== KOMIK ROUTES ======
router.post('/komik', upload.single('gambar'), komikController.createKomik);
router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.put('/komik/:id', upload.single('gambar'), komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);

// Export router untuk digunakan di index.js
module.exports = router;
