import React from "react";
import useStyles from "./styles";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
function CustomNextButton(props) {
  const classes = useStyles({ prev: props.prev });
  return (
    <div className={classes.root} onClick={props.onClick} title={props.label}>
      <NavigateNextOutlinedIcon
        style={{ fontSize: 80 }}
        className={classes.icon}
      />
    </div>
  );
}

export default CustomNextButton;
