export default ( theme ) => (
{
  root:
  {
    flexGrow: 1,
    height: "auto",
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: { zIndex: theme.zIndex.drawer + 1 },
  drawerPaper:
  {
    position: 'relative',
    width: theme.dimensions.drawerWidth,
  },
  activeColor:
  {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    '&:hover':
    {
      color: "#eee",
      backgroundColor: theme.palette.primary.dark,
    }
  },
  content:
  {
    padding: `${theme.spacing.unit*3}px`,
    flexGrow: 1,
    backgroundColor: theme.palette.type === "light" ? "#eee" : "#222",
  },
  toolbar: theme.mixins.toolbar,
  header:
  {
    marginBottom: `${theme.spacing.unit*3}px`
  },
  navItem:
  {
    padding: 0
  },
  navLink:
  {
    color: theme.palette.secondary.main,
    width: "100%",
    padding: `${theme.spacing.unit*2}px`,
    textDecoration: "none",
    '&$activeColor':
    {
      color: "#fff"
    }
  },
  navIcon:
  {
    float: "left",
    color: "inherit"
  },
  navText:
  {
    width: "100%",
    color: "inherit"
  }
})
