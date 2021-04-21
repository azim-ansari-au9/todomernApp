const express = require('express');
const router = express.Router();
const isAuth = require('../../middleware/auth');
const isMember = require('../../middleware/member');
const { check, validationResult } = require('express-validator');
const checkListControllers = require('../../controllers/checkListControllers');


router.post('/:cardId',
  [isAuth, isMember, [check('text', 'Text is required').not().isEmpty()]],
  checkListControllers.addCheckListitem
);
router.patch('/:cardId/:itemId',
  [isAuth, isMember, [check('text', 'Text is required').not().isEmpty()]],
  checkListControllers.editCheckListitems
);
router.patch('/:cardId/:complete/:itemId', [isAuth, isMember], checkListControllers.completeChecklistitems);
router.delete('/:cardId/:itemId', [isAuth, isMember], checkListControllers.deleteChecklistItem);

module.exports = router;
