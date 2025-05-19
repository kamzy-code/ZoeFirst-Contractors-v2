import { useRef, useState } from "react";
import sendEmail from "../service/emailservice";
import Swal from "sweetalert2";

function ContactForm() {
  const contactFormRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (contactFormRef.current) {
      const templateID = import.meta.env
        .VITE_EMAILJS_CONTACT_TEMPLATE_ID as string;

      sendEmail(contactFormRef.current, templateID).then(
        (result) => {
          console.log("Success:", result.text);
          Swal.fire({
            icon: "success",
            title: "Submitted!",
            text: "Form submitted successfully.",
          });

          // Reset form fields
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.log("Error:", error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...Erorr!",
            text: "Error submitting form...try again!",
          });
        }
      );
    } else {
      alert("Form not found!");
    }
  };

  return (
    <div className="Contact-form-container">
      <h1> Contact Us</h1>
      <form
        ref={contactFormRef}
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <div className="contact-form-input-container">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="quote-form-input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="quote-form-input-container">
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="quote-form-input-container">
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="submit-btn-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
