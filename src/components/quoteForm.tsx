import { useState, useRef } from "react";
import sendEmail from "../service/emailservice";
import Swal from 'sweetalert2';

interface QuoteFormProps {
  toggleForm: () => void;
}

function QuoteForm({ toggleForm }: QuoteFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Call the email service to send the email
    if (formRef.current) {
      const templateID = import.meta.env
        .VITE_EMAILJS_QUOTE_TEMPLATE_ID as string;
      sendEmail(formRef.current, templateID).then(
        (result) => {
          console.log("Success:", result.text);

          Swal.fire({
            icon: 'success',
            title: 'Submitted!',
            text: 'Quote request submitted successfully.',  
          })
          
          // Reset form fields
          setName("");
          setEmail("");
          setPhone("");
          setProject("");

          toggleForm();
        },
        (error) => {
          console.log("Error:", error.text);
           Swal.fire({
            icon: 'error',
            title: 'Oops...Erorr!',
            text: 'Error submitting request...try again!',  
          })


        }
      );
    } else {
      alert("Form not found!");
    }
  };

  return (
    <div className="Quote_Form-Backdrop">
      <div className="backdrop-clicker" onClick={() => toggleForm()}></div>
      <div className="quote-form-container">
        <h1> Get a Quote</h1>
        <form ref={formRef} className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-form-input-container">
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
              name="project"
              placeholder="Project"
              value={project}
              required
              onChange={(e) => setProject(e.target.value)}
            />
          </div>

          <div className="submit-btn-container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuoteForm;
