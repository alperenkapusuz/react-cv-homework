import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact__heading">İLETİŞİM</h2>
      <div className="contact__item">
        <p>Cep : 0 553 151 04 85</p>
        <p>E-posta : sefalperen21@gmail.com</p>
        <p>Adres : İstanbul / Pendik</p>
        <br />
        <a href="https://twitter.com/alprnkpsz" target="blank">
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
            alt="alprnkpsz"
            height="30"
            width="40"
          />
        </a>
        <a
          href="https://linkedin.com/in/alperen-kapusuz-a72a381a5"
          target="blank"
        >
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="alperen-kapusuz-a72a381a5"
            height="30"
            width="40"
          />
        </a>
        <a href="https://stackoverflow.com/users/15199653" target="blank">
          <img
            align="center"
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg"
            alt="15199653"
            height="30"
            width="40"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
