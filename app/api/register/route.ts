import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const baseUrl = 'https://ffrhqp-3000.csb.app';

export  default async function POST(req: NextApiRequest, res: NextApiResponse) {

  const formData = req.body;
  if (!formData.username || !formData.email || !formData.password) {
    res.status(400).send('Invalid request body');
    return;
  }

  const prisma = new PrismaClient();

  const user = await prisma.user.create({
    username: formData.username,
    email: formData.email,
    password: formData.password,
  });

  await prisma.$disconnect();

  res.setHeader('Access-Control-Allow-Origin', baseUrl);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Send the response
  res.status(200).send('User registered successfully!');

}


 