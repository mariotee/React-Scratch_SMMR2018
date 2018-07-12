export default ( theme ) => (
{
  root: { overflow: "hidden" },
  appBar: { zIndex: theme.zIndex.drawer + 1 },
  toolbar: theme.mixins.toolbar,
  drawerPaper:
  {
    overflow: "hidden",
    position: "visible",
    width: theme.dimensions.drawer.width
  },
  body:
  {
    position: "relative",
    padding: `0 0 0 ${theme.dimensions.drawer.width}px`,
    backgroundColor: theme.palette.type === "light" ? "#eee" : "#222",
  },
  content:
  {
    margin: `${theme.spacing.unit*3}px`
  },
  header:
  {
    margin: `${theme.spacing.unit}px`
  },
  navActive:
  {
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
  },
  navItem:
  {
    padding: 0,
  },
  navLink:
  {
    backgroundColor: '#fff',
    color: 'inherit',
    width: "100%",
    padding: `${theme.spacing.unit}px`,
    textDecoration: "none",
    '&$navActive':
    {
      color: "#fff"
    },
    '&:hover':
    {
      backgroundColor: '#eee',
    }
  },
  navIcon:
  {
    float: "left",
    padding: `${theme.spacing.unit*1.5}px ${theme.spacing.unit}px`,
    color: "inherit"
  },
  navText:
  {
    borderRadius: '8px',
    whiteSpace: 'nowrap',
    padding: `${theme.spacing.unit*2}px ${theme.spacing.unit}px`,
    textAlign: 'left',
    '&$navActive':
    {
      color: "#fff"
    }
  }
})
