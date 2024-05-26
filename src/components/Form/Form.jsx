/* eslint-disable no-unused-vars */
import React from "react";
import "./styles/form.css";
import MainBtn from "../Buttons/MainBtn";
import { Arrow } from "../Buttons/MainBtn";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import SubmitBtn from "../Buttons/SubmitBtn";

function Form() {
  const [phone, setPhone] = useState("");
  const sendEmail = (event) => {
    event.preventDefault();

    let emailAddress = "Hesham.mamesh@esccgroup.com";
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let phone = document.querySelector(
      ".react-international-phone-input"
    ).value;
    let message = document.querySelector(".message").value;

    let emailSubject = "I'm looking to work with you";
    let emailBody =
      "Name: " +
      name +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Message: " +
      message +
      "\n\n";

    let mailtoUrl =
      "mailto:" +
      emailAddress +
      "?subject=" +
      encodeURIComponent(emailSubject) +
      "&body=" +
      encodeURIComponent(emailBody);

    // Attempt to open the default email application
    window.open(mailtoUrl, "_blank");
  };
  return (
    <form>
      <span className="form-title  text-[#2a354c] font-[Montserrat]  text-[20px] lg:text-[24px] not-italic font-medium leading-[normal] uppercase">
        Leave us your massage and we <br /> will get back to you.
      </span>
      <div className="form-group mt-6">
        <label htmlFor="name">
          Name &amp; Surname
          <span className=" ml-1 text-[#858c98]">(required)</span>
        </label>
        <input
          type="text"
          id="name"
          className="name"
          name="name"
          placeholder="Name Here"
          required=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Email Address
          <span className=" ml-1 text-[#858c98]">(required)</span>
        </label>
        <input
          type="email"
          id="email"
          className="email"
          name="email"
          required=""
          placeholder="abcd@email.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">
          Phone Number
          <span className=" ml-1 text-[#858c98]">(required)</span>
        </label>
        <PhoneInput
          defaultCountry="eg"
          value={phone}
          className="flex items-center phone   "
          type="phone"
          id="phone"
          name="phone"
          onChange={(phone) => setPhone(phone)}
        />
      </div>
      <div className="form-group form-group0   ">
        <label htmlFor="message">
          Message
          <span className=" ml-1 text-[#858c98]">(optional)</span>
        </label>
        <textarea
          id="message"
          className="message"
          name="message"
          placeholder="Text area...."
          maxLength="120"
        ></textarea>
      </div>
      <p>less than 120 letter</p>
      <div className="form-group submitFrom form-group0 mt-6">
        <SubmitBtn
          event={sendEmail}
          name="Submit"
          type="submit"
          className="border-sec-blue text-sec-blue bottom-[0]   py-[8px] px-4 text-[15px] text-center "
          icon={<Arrow color="rgb(42 53 76 / 1)" />}
        />
      </div>
    </form>
  );
}

export default Form;
