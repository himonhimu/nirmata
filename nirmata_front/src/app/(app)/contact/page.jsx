"use client";
import Input from "@/ui/input";
import styles from "./page.module.css";

export default function Contact() {
  async function handleSubmit(eve) {
    eve.preventDefault();
    const formData = new FormData(eve.target);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");
    const message = formData.get("message");

    console.log({ firstName, lastName, email, phoneNumber, message });

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !phoneNumber.trim() ||
      !message.trim()
    ) {
      // Handle this error
      return "Input Is in valid";
    }

    const userMessage = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phoneNumber: phoneNumber.trim(),
      message: message.trim(),
    };

    console.log(userMessage);
  }

  return (
    <section className="container">
      <form action="" className={styles.contact} onSubmit={handleSubmit}>
        <div>
          <Input
            label={"First Name"}
            required
            type="text"
            name="firstName"
            placeholder="Enter Your First Name"
          />
        </div>
        <div>
          <Input
            label={"Last Name"}
            required
            type="text"
            name="lastName"
            placeholder="Enter Your Last Name"
          />
        </div>
        <div>
          <Input
            label={"E-mail"}
            required
            name="email"
            type="email"
            placeholder="Enter Your E-email"
          />
        </div>

        <div>
          <Input
            label={"Phone Number"}
            required
            name="phoneNumber"
            type="number"
            placeholder="Enter Your Phone Number"
          />
        </div>

        <div className={styles.message}>
          <label htmlFor="message">
            <span>Messages</span>
            <textarea
              name="message"
              id="message"
              required
              rows={10}
              placeholder="Enter Your Message "
            ></textarea>
          </label>
        </div>

        <div className={styles.submit}>
          <button className="cta" type="submit">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
