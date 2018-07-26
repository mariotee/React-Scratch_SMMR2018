export default (theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.type === 'light'
      ? '#eee'
      : '#222',
  },
  appBar: { zIndex: theme.zIndex.drawer + 1 },
  toolbar: theme.mixins.toolbar,
  sidebarPaper: {
    width: theme.dimensions.sidebar,
    overflow: 'hidden',
  },
  body: { padding: `0 0 0 ${theme.dimensions.sidebar}px` },
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
    padding: `${theme.spacing.unit * 2}px`,
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
