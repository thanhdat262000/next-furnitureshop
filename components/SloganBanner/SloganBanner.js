import { Typography } from "@material-ui/core";
import React from "react";
import TopTitle from "../TopTitle/TopTitle";
import useStyles from "./styles";

function SloganBanner(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.slogan}>
          <TopTitle title="CHUYÊN MÔN CỦA CHÚNG TÔI" />
          <div className={classes.sloganMain}>
            <Typography variant="h4" component="p">
              Chúng tôi thiết kế không gian phục vụ mục đích của họ với mức độ
              thuận tiện cao nhất.
            </Typography>
          </div>
        </div>
        <div className={classes.slogan}>
          <Typography>
            Chào mừng Quý khách đến với Noithat93 ! Tự hào là đơn vị đi đầu về
            công nghệ trong lĩnh vực sản xuất Đồ Gỗ Nội Thất. Với quy mô nhà
            xưởng lớn, trang bị máy móc hiện đại đến từ Ý, Đức, Nhật, cùng với
            đội ngũ thợ tay nghề bậc cao trên 15 năm kinh nghiệm. Chúng tôi sản
            xuất ra các phẩm chất lượng tốt nhất, mẫu mã hiện đại sang trọng,
            theo kịp xu hướng nội thất phong cách Châu Âu. Mang đến ngôi nhà bạn
            không gian nội thất hiện đại, sang trọng ! Từ các sản phẩm ĐỒ GỖ NỘI
            THẤT như Bàn ghế ăn, bàn ghế phòng khách, Sofa, giường, tủ-kệ, tủ
            bếp vv…
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default SloganBanner;
