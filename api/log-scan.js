export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true });
  }

  console.log("QR SCAN:", req.body);

  return res.status(200).json({
    success: true,
    time: new Date().toISOString()
  });
}
