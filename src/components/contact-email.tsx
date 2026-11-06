"use client";

import { useState } from "react";

const email = "johnhennessyai@gmail.com";

export function ContactEmail() {
  const [status, setStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email copied.");
    } catch {
      setStatus("Select and copy the email address above.");
    }
  }

  return (
    <div className="contact-email-block">
      <div className="contact-email">
        <span className="contact-address">{email}</span>
        <button className="copy-email" type="button" onClick={copyEmail}>Copy email</button>
      </div>
      <p className="copy-email-status" role="status">{status}</p>
    </div>
  );
}
