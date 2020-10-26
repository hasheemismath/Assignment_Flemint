import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  navbar: {
    fontFamily: "Roboto",
    paddingTop: "20px",
  }
}));



const Navbar = () => {
  const classes = useStyles();
  const [ListItems, setListItems] = useState([
    "Personal Info",
    "Certifications",
    "Employments",
    "Education",
    "Language",
  ]);

  return (
    <div className={classes.navbar}>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          {ListItems.map((currentContent) => {
            return (
              <ListItem button>
                <ListItemIcon>
                  <ArrowDropDownCircleIcon />
                </ListItemIcon>
                <ListItemText primary={currentContent}/>
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default Navbar;
