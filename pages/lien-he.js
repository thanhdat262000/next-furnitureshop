import React from "react";
import ContactPage from "../pagesRoute/Contact";
import Meta from "../components/Meta";
function Contact(props) {
  return (
    <>
      <Meta
        title="Tin tức | Tin mới nhất về các dự án"
        description="Thiết kế, thi công chung cư, nhà phố, khách sạn"
      />
      <ContactPage />
    </>
  );
}

export default Contact;
