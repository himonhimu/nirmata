import styles from "./css/contact-form.module.css";

import Input from "@/ui/input";

export default function ContactForm({ onSubmit }) {
  return (
    <form action="" onSubmit={onSubmit} className={styles.form}>
      <div>
        <Input
          label={"Your Name"}
          required
          type="text"
          name="fullName"
          placeholder="Enter Your First Name"
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
            rows={5}
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
  );
}
