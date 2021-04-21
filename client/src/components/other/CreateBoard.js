import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addBoard } from '../../actions/board';
import { Modal, TextField, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../../utils/allStyles';

const CreateBoard = ({ history }) => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(addBoard({ title }, history));
  };

  const body = (
    <div className={`${classes.paper} ${classes.createBoardModal}`}>
      <div className={classes.modalTop}>
        <h1>Create new board</h1>
        <Button onClick={() => setOpen(false)}>
          <CloseIcon />
        </Button>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <TextField variant='outlined' margin='normal' required fullWidth placeholder='add title' autoFocus 
        value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button type='submit' fullWidth variant='contained' color='primary'>  create Board </Button>
      </form>
    </div>
  );

  return (
    <div>
      <button className='board-card create-board-card' onClick={() => setOpen(true)} style={{width:"100px"}}>
        create new board
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        {body}
      </Modal>
    </div>
  );
};

export default withRouter(CreateBoard);
