const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const member = require('../../middleware/member');
const { check, validationResult } = require('express-validator');
const cardControllers = require('../../controllers/cardControllers');


router.post('/',
  [auth, member, [check('title', 'Title is required').not().isEmpty()]],
  cardControllers.addCard
);
router.get('/listCards/:listId', auth, cardControllers.getAllListCard);
router.get('/:id', auth, cardControllers.getSingleCard);
router.patch('/edit/:id', [auth, member], cardControllers.editCardDetails);
router.patch('/archive/:archive/:id', [auth, member], cardControllers.archiveCard);
router.patch('/move/:id', [auth, member], cardControllers.moveCardById);
router.put('/addMember/:add/:cardId/:userId', [auth, member], cardControllers.memberRemove);
router.delete('/:listId/:id', [auth, member], cardControllers.deleteCard);

module.exports = router;
