import { Typography } from "@material-ui/core";
import {
  VerifiedUserOutlined,
  LocalAtmOutlined,
  EmojiObjectsOutlined,
  EmojiEmotionsOutlined,
} from "@material-ui/icons";
import React from "react";
import useStyles from "./styles";
function ListCriterias(props) {
  const classes = useStyles();
  const listCriterias = [
    {
      icon: <VerifiedUserOutlined />,
      title: "Đảm bảo chất lượng",
      content:
        "Chất lượng là tiêu chứ đầu tiên mà chúng tôi cam kết mang đến cho khách hàng trong tất cả các khâu",
    },
    {
      icon: <LocalAtmOutlined />,
      title: "Giá cả cạnh tranh",
      content:
        "Chúng tôi tự tin mang đến cho bạn những sản phẩm có giá thành cạnh tranh nhất thị trường",
    },
    {
      icon: <EmojiObjectsOutlined />,
      title: "Khuyến khích sáng tạo",
      content:
        "Không ngừng học hỏi và cải tiến sản phẩm để phục vụ nhu cầu ngày càng cao của khách hàng",
    },
    {
      icon: <EmojiEmotionsOutlined />,
      title: "Mang đến sự hài lòng",
      content:
        "Sự hài lòng của khách hàng chính là mục tiêu và cũng là thành công lớn nhất của chúng tôi",
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h4" align="center" className={classes.title}>
          THI CÔNG NỘI THẤT TRỌN GÓI TẠI NỘI THẤT 93
        </Typography>
        <div>
          {listCriterias.map((item, index) => (
            <div className={classes.item} key={index}>
              {item.icon}
              <Typography variant="h6" align="center">
                {item.title}
              </Typography>
              <Typography variant="body1" align="center">
                {item.content}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListCriterias;
