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
    "&,&:hover":
    {
      color: "#fff",
      backgroundColor: "#09f099"
    }
  },
  content:
  {
    flexGrow: 1,
    backgroundColor: "#eee",
  },
  toolbar: theme.mixins.toolbar,
  navItem: { padding: 0 },
  navLink:
  {
    width: "100%",
    textDecoration: "none"
  },
  navIcon:
  {
    padding: "10% 0",
    color: "inherit",
    float: "left"
  },
  navText:
  {
    margin: 0,
    padding: "10% 0",
    width: "100%"
  }
})
