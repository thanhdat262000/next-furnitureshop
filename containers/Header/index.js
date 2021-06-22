import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";
import Navlink from "../../components/Navlink/Navlink";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CustomDrawer from "../../components/Drawer/CustomDrawer";
import useStyles from "./styles";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesignMenuOpen, setDesignMenu] = useState(false);
  const [isConstructionMenuOpen, setConstructionMenu] = useState(false);
  const classes = useStyles({ open: isOpen });
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleDesignMenu = () => {
    setDesignMenu(!isDesignMenuOpen);
  };
  const handleConstructionMenu = () => {
    setConstructionMenu(!isConstructionMenuOpen);
  };
  const listMenu = [
    { title: "trang chủ", link: "/" },
    { title: "giới thiệu", link: "/about" },
    {
      title: "thiết kế",
      expand: true,
      listSubMenu: [
        {
          title: "thiết kế nội thất chung cư",
          link: "/category/apartment-design",
        },
        {
          title: "thiết kế nội thất khách sạn",
          link: "/category/hotel-design",
        },
        { title: "thiết kế nội thất nhà phố", link: "/category/house-design" },
      ],
      link: "/design",
    },
    {
      title: "thi công",
      expand: true,
      listSubMenu: [
        {
          title: "thi công nội thất chung cư",
          link: "/category/apartment-construction",
        },
        {
          title: "thi công nội thất khách sạn",
          link: "/category/hotel-construction",
        },
        {
          title: "thi công nội thất nhà phố",
          link: "/category/house-construction",
        },
      ],
      link: "/construction",
    },
    { title: "tin tức", link: "/news" },
    { title: "liên hệ", link: "/contact" },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <Image src="/img/logo1.png" alt="logo" width={200} height={45} />
        </div>
        <CustomDrawer
          isOpen={isOpen}
          isDesignMenuOpen={isDesignMenuOpen}
          handleMenu={handleMenu}
          handleDesignMenu={handleDesignMenu}
          isConstructionMenuOpen={isConstructionMenuOpen}
          handleConstructionMenu={handleConstructionMenu}
          listMenu={listMenu}
        />
        <div className={classes.navLink}>
          {listMenu.map((menu, index) =>
            menu.expand ? (
              <Navlink
                key={index}
                title={menu.title}
                expand={menu.expand}
                listMenu={menu.listSubMenu}
                link={menu.link}
              />
            ) : (
              <Navlink key={index} title={menu.title} link={menu.link} />
            )
          )}
        </div>
        <IconButton className={classes.menuIcon} onClick={handleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
