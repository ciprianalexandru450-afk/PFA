import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message, _gotcha } = req.body;

    // Basic Anti-Spam: Honeypot check
    if (_gotcha) {
      return res.status(400).json({ error: "Spam detected" });
    }

    // Basic Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Toate câmpurile obligatorii trebuie completate." });
    }

    try {
      // SMTP Configuration
      // Note: Use environment variables for security
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`, // Best practice: send from your authenticated email
        replyTo: email,
        to: "cipriangheorghiu72@yahoo.com",
        subject: `Mesaj nou de contact de la ${name} - CPR Media`,
        text: `
          Nume: ${name}
          Email: ${email}
          Telefon: ${phone || "Nespecificat"}
          
          Mesaj:
          ${message}
        `,
        html: `
          <h3>Mesaj nou de contact</h3>
          <p><strong>Nume:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "Nespecificat"}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Mesajul a fost trimis cu succes!" });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ error: "Eroare la trimiterea email-ului. Te rugăm să încerci mai târziu." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
