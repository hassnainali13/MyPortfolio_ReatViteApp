import emailjs from "@emailjs/node";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { user_name, user_email, message } = req.body;

    try {
      const result = await emailjs.send(
        "service_xxdzz0d",
        "template_fe159ra",
        { user_name, user_email, message },
        "YEs619UthrCPevLzj"
      );
      res.status(200).json({ success: true, result });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
