export default (theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.type === 'light'
      ? '#eee'
      : '#222',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
  sidebarPaper: {
    width: theme.dimensions.sidebar,
    overflow: 'hidden',
  },
  body: {
    padding: `0 0 0 ${theme.dimensions.sidebar}px`,
  },
  content: {
    padding: `${theme.spacing.unit * 3}px`,
  },
  header: {
    paddingBottom: `${theme.spacing.unit * 2}px`,
  },
  navActive: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
  },
  navItem: {
    padding: 0,
  },
  navLink: {
    //padding: `${theme.spacing.unit*2}px ${theme.spacing.unit}px`,
    backgroundColor: 'inherit',
    width: '100%',
    textDecoration: 'none',
  },
  navIcon: {
    float: 'left',
    padding: `${theme.spacing.unit * 2}px`,
    color: theme.palette.type === 'light'
      ? `${theme.palette.primary.dark + '99'}`
      : `${theme.palette.primary.light + '99'}`,
    '&$navActive': {
      color: '#fff',
    },
  },
  navText: {
    padding: `${theme.spacing.unit * 2}px`,
    whiteSpace: 'nowrap',
    textAlign: 'left',
    '&$navActive': {
      color: '#fff',
    },
  },
});
