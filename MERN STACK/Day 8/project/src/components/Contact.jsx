import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Thank you for contacting me!");
  };

  return (
    <section style={{ padding: "40px", textAlign: "center" }}>
      <h2>Contact</h2>
      <p>Email: thamizh@email.com</p>
      <p>Phone: 9176096787</p>

      <button onClick={handleClick}>Send Message</button>

      {message && <p>{message}</p>}
    </section>
  );
}

export default Contact;