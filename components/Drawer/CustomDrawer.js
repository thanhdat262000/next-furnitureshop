import React from "react";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./styles";
import { useRouter } from "next/router";
function CustomDrawer({
  isDesignMenuOpen,
  isOpen,
  handleDesignMenu,
  handleMenu,
  isConstructionMenuOpen,
  handleConstructionMenu,
  listMenu,
}) {
  const classes = useStyles();
  const {
    pathname,
    query: { category },
  } = useRouter();
  let path;
  if (category) path = `/category/${category}`;
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={isOpen}
        onClose={handleMenu}
      >
        <List>
          {listMenu.map((menu, index) =>
            menu.expand ? (
              <div key={index}>
                <ListItem
                  className={clsx({
                    [classes.link]: true,
                    [classes.linkText]: true,
                    [classes.onMenuClick]: menu.link === pathname,
                  })}
                  button
                  onClick={
                    menu.title === "thiết kế"
                      ? handleDesignMenu
                      : handleConstructionMenu
                  }
                >
                  <ListItemText>
                    <a href={menu.link} className={classes.linkText}>
                      {menu.title}
                    </a>
                  </ListItemText>
                  {menu.title === "thiết kế" ? (
                    isDesignMenuOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : isConstructionMenuOpen ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItem>
                <Collapse
                  in={
                    menu.title === "thiết kế"
                      ? isDesignMenuOpen
                      : isConstructionMenuOpen
                  }
                  unmountOnExit
                >
                  <List disablePadding className={classes.nested}>
                    {menu.listSubMenu.map((subMenu, index) => (
                      <ListItem
                        className={clsx({
                          [classes.link]: true,
                          [classes.linkText]: true,
                          [classes.onMenuClick]: subMenu.link === path,
                        })}
                        key={index}
                        component="a"
                        href={subMenu.link}
                      >
                        <ListItemText>{subMenu.title}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>{" "}
              </div>
            ) : (
              <ListItem
                key={index}
                className={clsx({
                  [classes.link]: true,
                  [classes.linkText]: true,
                  [classes.onMenuClick]: menu.link === pathname,
                })}
                component="a"
                href={menu.link}
              >
                <ListItemText>{menu.title}</ListItemText>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </div>
  );
}

export default CustomDrawer;
