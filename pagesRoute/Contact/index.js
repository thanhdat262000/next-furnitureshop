import React from "react";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";
import ContactContent from "../../containers/ContactContent/ContactContent";
function ContactPage(props) {
  return (
    <div>
      <OpeningModal
        topTitle="Contact us"
        mainTitle="Let's get in touch"
        content="Work with us for more infomation"
      />
      <ContactContent />
    </div>
  );
}

export default ContactPage;
