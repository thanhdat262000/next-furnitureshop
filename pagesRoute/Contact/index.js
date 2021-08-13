import React from "react";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";
import ContactContent from "../../containers/ContactContent/ContactContent";
function ContactPage(props) {
  return (
    <div>
      <OpeningModal
        topTitle="Liện hệ"
        mainTitle="Liên hệ với chúng tôi ngay!"
        content="Trở thành khách hàng của chúng tôi để trải nghiệm những sản phẩm tốt nhất"
      />
      <ContactContent />
    </div>
  );
}

export default ContactPage;
