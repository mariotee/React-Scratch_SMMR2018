export default ( theme ) => (
{
  root: { overflow: "hidden" },
  appBar: { zIndex: theme.zIndex.drawer + 1 },
  toolbar: theme.mixins.toolbar,
  drawerPaper:
  {
    overflow: "hidden",
    position: "absolute",
    height: "100%",
    width: theme.dimensions.drawerWidth
  },
  body:
  {
    position: "absolute",
    left: `${theme.dimensions.drawerWidth}px`,
    padding: `0`,
    width: `calc(100% - ${theme.dimensions.drawerWidth}px)`,
    height: `calc(100% - ${theme.spacing.unit}px)`,
    backgroundColor: theme.palette.type === "light" ? "#eee" : "#222",
  },
  content:
  {
    padding: `${theme.spacing.unit*2}px ${theme.spacing.unit*4}px`
  },
  header:
  {
    marginBottom: `${theme.spacing.unit*3}px`
  },
  navActive:
  {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    '&:hover':
    {
      color: "#eee",
      backgroundColor: theme.palette.primary.dark,
    }
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
