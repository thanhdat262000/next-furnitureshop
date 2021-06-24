import { Typography } from "@material-ui/core";
import React from "react";
import ListProject from "../ListProjects/ListProject";
import useStyles from "./styles";

function AboutContent({ projects }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.section1}>
          <Typography variant="h4" className={classes.mainTitle}>
            GIỚI THIỆU VỀ NewFurniture
          </Typography>
          <Typography className={classes.content}>
            NewFurniture là một trong những công ty hàng đầu về thiết kế và thi
            công nội thất. Bằng tâm huyết, bằng kinh nghiệm, sự nhiệt tình và
            sáng tạo, đội ngũ NewFurniture tự tin mang đến cho khách hàng những
            phong cách nội thất thẩm mỹ, nâng tầm giá trị cho căn nhà bạn. Đến
            với chúng tôi, bạn chắc chắn sẽ hài lòng về không gian sống của
            mình.
          </Typography>
          <Typography variant="h5" className={classes.subTitle}>
            Tại sao NewFurniture thành lập và phát triển?
          </Typography>
          <Typography className={classes.content}>
            Không gian sống của mỗi người thực sự rất quan trọng và luôn cần
            phải được đảm bảo rằng nó đẹp, có thể đáp ứng được nhu cầu sinh hoạt
            tối đa cho người dân. Tuy nhiên làm thế nào để có được một không
            gian sống đẹp và hợp ý thì không phải ai cũng có thể làm được. Chính
            bởi điều đó mà NewFurniture ra đời và thành lập nhằm mong muốn tư
            vấn thiết kế, thi công nội thất để giúp mỗi một không gian sống của
            quý khách hàng đều trở nên tuyệt vời hơn.
          </Typography>
          <Typography variant="h5" className={classes.subTitle}>
            NewFurniture mang sứ mệnh nào?
          </Typography>
          <Typography className={classes.content}>
            NewFurniture tự hào là đơn vị thiết kế và thi công kiến trúc nội
            ngoại thất uy tín hàng đầu tại Việt Nam. NewFurniture khởi nguồn từ
            những kiến trúc sư tâm huyết, sau 5 năm đi vào xây dựng và phát
            triển, NewFurniture đã trở thành một đơn vị đáng tin cậy trong việc
            tư vấn – thiết kế – thi công kiến trúc nội ngoại thất tại Việt Nam.
          </Typography>
          <Typography className={classes.content}>
            Chúng tôi hoạt động với sứ mệnh rằng:
          </Typography>
          <ul>
            <li>
              <Typography className={classes.content}>
                Cung cấp đến khách hàng những giá trị sáng tạo khi thiết kế, thi
                công nội thất để không gian sống của quý khách hàng trở nên
                tuyệt vời hơn.
              </Typography>
            </li>
            <li>
              <Typography className={classes.content}>
                Là điểm đến tin cậy mỗi khi khách hàng có nhu cầu thiết kế, thi
                công nội thất để sở hữu một nơi sống đích thực nhất.
              </Typography>
            </li>
            <li>
              <Typography className={classes.content}>
                Mang lại cuộc sống ngày càng tốt đẹp hơn, đưa cuộc sống của mỗi
                người không chỉ là sống mà còn là sự tận hưởng.
              </Typography>
            </li>
          </ul>
          <Typography className={classes.content}>
            Với đội ngũ kiến trúc sư dày dặn kinh nghiệm, chúng tôi thiết kế
            những công trình đẳng cấp như thiết kế biệt thự sang trọng, những
            sản phẩm vượt trội về chất lượng, đáp ứng được đúng nhu cầu cũng như
            sự kỳ vọng của khách hàng. NewFurniture không ngừng đổi mới, ngày
            càng hoàn thiện và nhanh chóng khẳng định được vị thế thương hiệu là
            một công ty tư vấn – thiết kế – thi công kiến trúc nội ngoại thất uy
            tín với phong cách thiết kế rất riêng chỉ có ở NewFurniture.
          </Typography>
          <Typography variant="h5" className={classes.subTitle}>
            Tầm nhìn của NewFurniture luôn không ngừng vươn xa
          </Typography>
          <Typography className={classes.content}>
            Bằng chính sự đam mê và không ngừng học hỏi, đội ngũ của Home&Home
            luôn cập nhật và bắt kịp xu thế kiến trúc nội ngoại thất trong và
            ngoài nước. Mỗi sự nỗ lực cố gắng của chúng tôi đều đem lại cho
            khách hàng sự hài lòng.
          </Typography>
          <Typography></Typography>
        </div>
        <div></div>
      </div>
      <ListProject
        title="Latest projects"
        multipleTypes={true}
        projectList={projects}
      />
    </div>
  );
}

export default AboutContent;
