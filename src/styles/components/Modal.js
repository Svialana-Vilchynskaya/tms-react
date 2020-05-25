import { createUseStyles } from 'react-jss';

const ModalStyle = () => ({
  modal_background: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
  modal_root: {
    width: '770px',
    backgroundColor: ' #d8d8d8',
    position: 'absolute',
    padding: '20px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
    borderRadius: '5px',
  },
  modal_rootText: {
    color: '#ffffff',
    fontSize: '30px',
    textAlign: 'center',
    backgroundColor: '#252525',
    borderRadius: '4px 4px 0 0',
    padding: '10px',
  },

  close_btn: {
    textDecoration: 'none',
    position: 'fixed',
    top: '-5px',
    right: '3px',
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#838383',
    '&:hover': {
      color: '#7a0000',
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
});

export default createUseStyles(ModalStyle);
