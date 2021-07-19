import React from "react";
import { Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./styles";
import TopTitle from "../TopTitle/TopTitle";
import Link from "next/link";
import CommonButton from "../CommomButton/CommonButton";
function ServiceDetail({ img, title, intro, link }) {
  const classes = useStyles();
  return !intro ? (
    <Link href={link}>
      <a className={classes.root}>
        <div className={classes.container}>
          <div
            className={classes.image}
            style={{ backgroundImage: "url(" + img + ")" }}
          >
            <div className={classes.overlay} id="overlay">
              <AddIcon style={{ fontSize: 50 }} />
            </div>
          </div>
          <div className={classes.title} id="serviceDetailTitle">
            <Typography variant="h6" align="center">
              {title}
            </Typography>
          </div>
        </div>
      </a>
    </Link>
  ) : (
    <div className={classes.introRoot}>
      <div className={classes.container}>
        <TopTitle title="CHÚNG TÔI LÀM GÌ?" />
        <div className={classes.introMainTitle}>
          <Typography variant="h4">Dịch vụ của chúng tôi.</Typography>
        </div>
        <div>
          <Typography>
            Chào mừng Quý khách đến với Noithat93 !. Với quy mô nhà xưởng lớn,
            trang bị máy móc hiện đại đến từ Ý, Đức, Nhật, cùng với đội ngũ thợ
            tay nghề bậc cao trên 15 năm kinh nghiệm. Chúng tôi sản xuất ra các
            phẩm chất lượng tốt nhất, mẫu mã hiện đại sang trọng, theo kịp xu
            hướng nội thất phong cách Châu Âu. Mang đến ngôi nhà bạn không gian
            nội thất hiện đại, sang trọng ! Từ các sản phẩm ĐỒ GỖ NỘI THẤT như
            Bàn ghế ăn, bàn ghế phòng khách, Sofa, giường, tủ-kệ, tủ bếp vv…
          </Typography>
        </div>
        <CommonButton title="View services" />
      </div>
    </div>
  );
}

export default ServiceDetail;
