const express = require('express');
const router = express.Router();
const isAuth = require('../../middleware/auth');
const isMember = require('../../middleware/member');
const { check, validationResult } = require('express-validator');
const listControllers = require('../../controllers/listControllers');


router.post('/', [isAuth, isMember, [check('title', 'please fill any Title field').not().isEmpty()]],
  listControllers.addList);
router.get('/boardLists/:boardId', isAuth, listControllers.getAllbordsList);
router.get('/:id', isAuth, listControllers.listById);
router.patch('/rename/:id',
  [isAuth, isMember, [check('title', 'please fill any Title field').not().isEmpty()]],
  listControllers.editListTitle);
router.patch('/archive/:archive/:id', [isAuth, isMember], listControllers.archiveList);
router.patch('/move/:id', [isAuth, isMember],listControllers.moveListbyId);

module.exports = router;
