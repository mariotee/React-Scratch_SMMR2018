export default (theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.type === 'light'
      ? '#eeeeee'
      : '#222222',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
  listRoot: {
    display: 'flex',
    overflowX: 'auto',
  },
  content: {
    padding: `${theme.spacing.unit * 2}px`,
  },
  header: {
    paddingBottom: `${theme.spacing.unit * 2}px`,
  },
  navActive: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  navItem: {    
    padding: 0,
    '&$navActive': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  navLink: {
    width: '100%',
    margin: 0,
    padding: 0,
    textDecoration: 'none',    
    color: 'inherit',    
    textAlign: 'center',
  },
  navIcon: {    
    display: 'block',
    margin: '0 auto',
    padding: 0,
    color: 'inherit',
    opacity: 0.8,
  },
  navText: {
    margin: '0 auto',
    display: 'block',
    color: 'inherit',    
  },
});
