import React from "react";
import StepByStep from "../../components/StepByStep/StepByStep";
import useStyles from "./styles";

function ListStep(props) {
  const classes = useStyles();
  const listSteps = [
    { intro: true },
    {
      stepNumber: "01",
      mainTitle: "Plan",
      content:
        "When an unknown printer tôk a gallery of type and scrambled it to make a book",
      button: "Read more",
    },
    {
      stepNumber: "02",
      mainTitle: "Design",
      content:
        "When an unknown printer tôk a gallery of type and scrambled it to make a book",
      button: "Read more",
    },
    {
      stepNumber: "03",
      mainTitle: "Execute",
      content:
        "When an unknown printer tôk a gallery of type and scrambled it to make a book",
      button: "Read more",
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {listSteps.map((step, index) =>
          step.intro ? (
            <StepByStep intro={step.intro} key={index} />
          ) : (
            <StepByStep
              stepNumber={step.stepNumber}
              mainTitle={step.mainTitle}
              content={step.content}
              button={step.button}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
}

export default ListStep;
