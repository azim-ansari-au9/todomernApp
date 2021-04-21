const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const member = require('../../middleware/member');
const { check, validationResult } = require('express-validator');
const boardControllers = require('../../controllers/boardControllers');


router.post( '/', [auth, [check('title', 'Title is required').not().isEmpty()]],boardControllers.addBoard);
router.get('/', auth, boardControllers.userBoard);
router.get('/:id', auth, boardControllers.boardById);
router.get('/activity/:boardId', auth, boardControllers.boardActivity);
router.patch('/rename/:id',
  [auth, member, [check('title', 'Title is required').not().isEmpty()]],
  boardControllers.changeBoardTitle
);
router.put('/addMember/:userId', [auth, member], boardControllers.addBoardMember);

module.exports = router;
