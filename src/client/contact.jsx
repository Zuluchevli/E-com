import { useState } from "react";
import "../css/contact.css";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);

        setSuccess("Your message has been sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="mainContact">
            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Contact Us</h2>

                    {success && <p className="success">{success}</p>}

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}
