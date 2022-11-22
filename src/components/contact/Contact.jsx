import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [reply, setReply] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setReply("Thanks,i'll reply ASAP:)");
    setTimeout(() => {
      setReply("");
    }, 3000);
  };
  //
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <textarea placeholder="message"></textarea>
          <button type="submit">Send</button>
          <span>{reply}</span>
        </form>
      </div>
    </div>
  );
}
