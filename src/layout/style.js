export default ( theme ) => (
{
  root:
  {
    height: "auto",
    overflow: "hidden"
  },
  appBar:
  {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper:
  {
    overflow: "hidden",
    position: "absolute",
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
    position: "absolute",
    left: `${theme.dimensions.drawerWidth}px`,
    padding: `0 ${theme.spacing.unit*4}px`,
    width: "100%",
    height: "100%",
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
