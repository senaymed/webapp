import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { amount, email, packageName } = req.body;

  const chapaRes = await fetch('https://api.chapa.co/v1/transaction/initialize', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer CHASECK_TEST-6bcvnA3Q6eoqg9xPyJ6zEDeCjTmbmz2D',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      currency: 'ETB',
      email,
      first_name: 'SenayMed',
      last_name: packageName,
      tx_ref: `senaymed-${Date.now()}`,
      callback_url: 'http://localhost:3000/dashboard?payment=success',
      return_url: 'http://localhost:3000/dashboard?payment=success',
      customization: {
        title: 'SenayMed Subscription',
        description: `Subscribe to ${packageName}`,
      },
    }),
  });

  const data = await chapaRes.json();
  if (data.status === 'success') {
    res.status(200).json({ url: data.data.checkout_url });
  } else {
    res.status(400).json({ error: data.message });
  }
} 