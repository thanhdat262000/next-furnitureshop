import React from "react";
import StepByStep from "../../components/StepByStep/StepByStep";
import useStyles from "./styles";

function ListStep(props) {
  const classes = useStyles();
  const listSteps = [
    { intro: true },
    {
      stepNumber: "01",
      mainTitle: "Kế hoạch",
      content:
        "Lên kế hoạch chẳ chẽ cho công trình. Xác định những công đoạn cần thực hiện",
      button: "Read more",
    },
    {
      stepNumber: "02",
      mainTitle: "Thiết kế",
      content:
        "Với đội ngũ kiến trúc sư lành nghê, chúng tôi thiết kế ra những bản vẽ đẹp nhất.",
      button: "Read more",
    },
    {
      stepNumber: "03",
      mainTitle: "Thi công",
      content: "Bẳt tay vào việc thực thi theo kế hoạch đã đề ra",
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
