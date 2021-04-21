import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 330;
const useStyles = makeStyles((theme) => ({
//modalStyles
  createBoardModal: {
    width: 600,
    marginTop:'100px',
  },
  cardModal: {
    width: 800,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 400,
    },
  },
  cardTitle: {
    width: '100%',
  },
  button: {
    width: 180,
    marginTop: 10,
  },
  membersTitle: {
    margin: '20px 0 10px',
  },
  labelTitle: {
    margin: '20px 0 10px',
  },
  colorPicker: {
    minWidth: 212,
  },
  noLabel: {
    width: 100,
  },
  moveCardTitle: {
    marginTop: 20,
  },
  moveCard: {
    display: 'flex',
    flexDirection: 'column',
  },
  moveCardSelect: {
    marginTop: 10,
    marginRight: 20,
    width: 200,
  },
  header: {
    marginTop: 10,
    marginBottom: 10,
  },
  checklistItem: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    margin: '2px 0 5px',
  },
  checklistFormLabel: {
    width: '100%',
  },
  itemButtons: {
    display: 'flex',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  itemButton: {
    height: 40,
  },
  checklistBottom: {
    marginTop: 5,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.up('md')]: {
      top: '5%',
      maxHeight: '90vh',
    },
    [theme.breakpoints.down('sm')]: {
      height: '100%',
    },
    overflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalTop: {
    display: 'flex',
  },
  modalSection: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: 'auto',
  },
  modalBottomRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  archiveButton: {
    marginBottom: 5,
  },

  //form-styles
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    maxWidth: '100vw',
    padding: '20px',
    background: 'linear-gradient(135deg, #0079bf, #5067c5)',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    background: 'white',
    maxWidth: '500px',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  //drawer-style
  hide: {
    display: 'none',
  },
  showMenuButton: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 150,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    justifyContent: 'space-between',
  },
  activityTitle: {
    textAlign: 'center',
    padding: '20px 20px 0',
  },
  viewMoreActivityButton: {
    textAlign: 'center',
    margin: '0 auto 20px',
  },
  //dailogStyles
  dialog: {
    padding: 20,
  },
  moveListTop: {
    display: 'flex',
  },
  moveListBottom: {
    display: 'flex',
    flexDirection: 'column',
  },
  moveListButton: {
    marginTop: 20,
  },

}));

export default useStyles;
