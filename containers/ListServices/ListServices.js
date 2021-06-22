import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DateRangeIcon from "@material-ui/icons/DateRange";
import BusinessIcon from "@material-ui/icons/Business";
import CreateIcon from "@material-ui/icons/Create";
import Service from "../../components/Service/Service";
import useStyles from "./styles";
function ListServices(props) {
  const services = [
    {
      icon: <StarBorderIcon />,
      title: "Award-winning solutions",
      titleContent: "Unique Offer",
    },
    {
      icon: <DateRangeIcon />,
      title: "Exclusive 10 years warranty",
      titleContent: "What's inside?",
    },
    {
      icon: <BusinessIcon />,
      title: "Top level interior project",
      titleContent: "See our work",
    },
    {
      icon: <CreateIcon />,
      title: "Get a personal estimate",
      titleContent: "Fill the form",
    },
  ];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {services.map((service, index) => (
          <Service
            key={index}
            icon={service.icon}
            title={service.title}
            titleContent={service.titleContent}
          />
        ))}
      </div>
    </div>
  );
}

export default ListServices;
