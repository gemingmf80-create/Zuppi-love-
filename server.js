const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const referrals = [];
const payments = [];

app.post('/refer', (req, res) => {
  const { email } = req.body;
  referrals.push({ email, time: Date.now() });
  res.json({ message: "🎉 Referral Successful!" });
});

app.post('/upi-payment', (req, res) => {
  payments.push({ paid: true, time: Date.now() });
  res.json({ message: "✅ Payment Logged" });
});

app.get('/admin/referrals', (req, res) => res.json(referrals));
app.get('/admin/payments', (req, res) => res.json(payments));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`💘 Zuppi Love Server running at http://localhost:${PORT}`);
});
