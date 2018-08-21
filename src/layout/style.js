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
  sidebarPaper: {
    [theme.breakpoints.down('sm')]: {
      width: theme.dimensions.sidebarMobile,
    },
    [theme.breakpoints.up('md')]: {
      width: theme.dimensions.sidebarNormal,
    },
    overflow: 'hidden',
  },
  body: {
    [theme.breakpoints.down('sm')]: {
      padding: `0 0 0 ${theme.dimensions.sidebarMobile}px`,
    },
    [theme.breakpoints.up('md')]: {
      padding: `0 0 0 ${theme.dimensions.sidebarNormal}px`,
    },
  },
  content: { padding: `${theme.spacing.unit * 3}px` },
  header: { paddingBottom: `${theme.spacing.unit * 2}px` },
  navActive: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  navItem: {
    margin: 0,
    padding: 0,
  },
  navLink: {
    width: '100%',
    textDecoration: 'none',
    backgroundColor: 'inherit',
    color: theme.palette.type === 'light'
    ? '#333'
    : '#ccc',
    '&$navActive': { color: '#fff' },
  },
  navIcon: {
    float: 'left',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit}px`,
    color: 'inherit',
    opacity: 0.8,
  },
  navText: {
    padding: `${theme.spacing.unit * 2}px`,
    whiteSpace: 'nowrap',
    textAlign: 'left',
    color: 'inherit',
  },
});
