import React from "react";
import CustomModal from "../../components/Modal/CustomModal";
import useStyles from "./styles";

function IntroModal(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div
          className={classes.image}
          style={{ backgroundImage: "url(/img/intro.png)" }}
        >
          <div></div>
        </div>
        <CustomModal
          button="TÌM HIỂU THÊM"
          topTitle="VỀ CHÚNG TÔI"
          mainTitle="MANG ĐẾN NHỮNG GIÁ TRỊ CỐT LÕI."
          content="Chúng tôi luôn nỗ lực làm việc để mang đến những sản phẩm chất lượng nhất đến với khách hàng.
           Với nhiều mẫu mã sang trọng, kiểu dáng phong phú, chúng tôi tin rằng sản phẩm của chúng tôi có thể làm hài lòng những khách hàng khó tính nhất."
        />
      </div>
    </div>
  );
}

export default IntroModal;
