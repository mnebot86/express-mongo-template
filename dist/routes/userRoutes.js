'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// userRoutes.ts
const express_1 = require('express');
const userController_1 = require('@controllers/userController');
const router = (0, express_1.Router)();
router.post('/register', userController_1.registerUser);
router.post('/login', userController_1.loginUser);
exports.default = router;
