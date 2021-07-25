import { Typography } from "@material-ui/core";
import React from "react";
import ListProject from "../ListProjects/ListProject";
import Image from "next/image";
import useStyles from "./styles";
import clsx from "clsx";

function AboutContent({ projects }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h4" className={classes.mainTitle}>
          Giới thiệu về Noithat93
        </Typography>
        <Typography className={classes.content}>
          Noithat93 là một trong những công ty hàng đầu về thiết kế và thi công
          nội thất. Bằng tâm huyết, bằng kinh nghiệm, sự nhiệt tình và sáng tạo,
          đội ngũ NewFurniture tự tin mang đến cho khách hàng những phong cách
          nội thất thẩm mỹ, nâng tầm giá trị cho căn nhà bạn. Đến với chúng tôi,
          bạn chắc chắn sẽ hài lòng về không gian sống của mình.
        </Typography>
        <Typography variant="h4" className={classes.mainTitle}>
          Dịch vụ của chúng tôi
        </Typography>
        <div className={classes.section}>
          <div className={classes.subSection1}>
            <Image
              src="/img/service1.jpg"
              alt="thiet-ke-noi-that"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
          <div className={classes.subSection2}>
            <Typography variant="h6" className={classes.subTitle2}>
              Thiết kế nội thất
            </Typography>
            <Typography className={classes.content}>
              Với đội ngũ kiến trúc sư có nhiều năm kinh nghiệm cả trong thiết
              kế và thi công nội thất, đã thực hiện hơn 100 dự án thiết kế lớn
              nhỏ, luôn đặt thẩm mỹ và công năng sử dụng lên hàng đầu. Chúng tôi
              tự tin sẽ mang đến dịch vụ tốt nhất: “Thẩm mỹ trong phối cảnh, an
              toàn trong kết cấu, chính xác trong bản vẽ kỹ thuật”
            </Typography>
          </div>
        </div>
        <div className={clsx(classes.section, classes.reverseSection)}>
          <div className={classes.subSection1}>
            <Image
              src="/img/service1.jpg"
              alt="thiet-ke-noi-that"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
          <div className={classes.subSection2}>
            <Typography variant="h6" className={classes.subTitle2}>
              Thi công công trình
            </Typography>
            <Typography className={classes.content}>
              Lập kế hoạch đo đạc và lên dự toán một cách chi tiết và cụ thể
              nhất – Tổ chức thi công các hạng mục đã ký kết với khách hàng theo
              đúng thiết kế hoặc bản vẽ đã thống nhất trước đó – Giám sát và
              quản lý đảm bảo dự án đúng tiến độ mà không làm ảnh hưởng đến chất
              lượng thi công.
            </Typography>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.subSection1}>
            <Image
              src="/img/service1.jpg"
              alt="thiet-ke-noi-that"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
            />
          </div>
          <div className={classes.subSection2}>
            <Typography variant="h6" className={classes.subTitle2}>
              Sản xuất nội thất
            </Typography>
            <Typography className={classes.content}>
              Sở hữu dây chuyền máy móc hiện đại và đội ngũ thợ lành nghề đã có
              nhiều năm kinh nghiệm, Noithat93 mong muốn sẽ đem đến những sản
              phẩm nội thất có kết cấu an toàn, thẩm mỹ và giá thành cạnh tranh
              nhất. Đi kèm với chế độ bảo hành, cung cách phục vụ nhiệt tình –
              chuyên nghiệp.
            </Typography>
          </div>
        </div>
        <Typography variant="h4" className={classes.mainTitle}>
          Triết lý của chúng tôi
        </Typography>
        <div className={classes.phiContainer}>
          <div className={classes.phiSubSection}>
            <Typography variant="h6" className={classes.subTitle2}>
              Luôn luôn lắng nghe khách hàng
            </Typography>
            <Typography className={classes.content}>
              &quot;Khách hàng là thượng đế&quot;. Chúng tôi luôn muốn lắng nghe
              những ý kiến đóng góp của khách hàng để ngày càng cải thiện sản
              phẩm tốt hơn. Sự hài lòng của quý khách chính là những gì chúng
              tôi hướng đến.
            </Typography>
            <div className={classes.phiImage}>
              <Image
                src="/img/listen.png"
                layout="fill"
                alt="listen"
                objectFit="contain"
                objectPosition="top"
              />
            </div>
          </div>
          <div className={classes.phiSubSection}>
            <Typography variant="h6" className={classes.subTitle2}>
              Luôn học hỏi, cải tiến công nghệ, nâng cao chất lượng
            </Typography>
            <Typography className={classes.content}>
              Mục tiêu trở thành một công ty hàng đầu về thiết kế và thi công
              nội thất trong một thị trường cạnh tranh và biến đổi không ngừng.
              Chúng tôi luôn luôn chú trọng trong việc đào tạo và tìm kiếm những
              kiến trúc sư tài năng, những người thợ lành nghề để nâng cao năng
              suất và chất lượng của sản phẩm cũng như hoàn thiện hệ thống công
              nghệ máy móc thiết bị sản xuất phục vụ cho công việc
            </Typography>
            <div className={classes.phiImage}>
              <Image
                src="/img/learn.jpg"
                layout="fill"
                alt="listen"
                objectFit="contain"
                objectPosition="top"
              />
            </div>
          </div>
          <div className={classes.phiSubSection}>
            <Typography variant="h6" className={classes.subTitle2}>
              Tính sáng tạo được đặt lên hàng đầu.
            </Typography>
            <Typography className={classes.content}>
              Chúng tôi coi trọng và tạo cơ chế đặc biệt để sự sáng tạo, đổi mới
              được duy trì và phát triển mạnh mẽ trong Công ty. Sáng tạo và đổi
              mới là cách duy nhất giúp chúng tôi thích nghi và đáp ứng yêu cầu
              ngày càng cao của khách hàng, đồng thời là cách thức chúng tôi tạo
              lợi thế cạnh tranh bền vững. Sáng tạo và đổi mới mà chúng tôi nói
              đến bao gồm cả tư duy, phương pháp, công cụ lẫn cách thức hành
              động.
            </Typography>
            <div className={classes.phiImage}>
              <Image
                src="/img/creative.jpg"
                layout="fill"
                alt="listen"
                objectFit="contain"
                objectPosition="top"
              />
            </div>
          </div>
        </div>
      </div>
      <ListProject
        title="Dự án mới nhất"
        multipleTypes={true}
        projectList={projects}
      />
    </div>
  );
}

export default AboutContent;
