import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { name, email, message } = req.body;

//         try {
//             const contact = await prisma.contact.create({
//                 data: { name, email, message },
//             });
//             res.status(201).json(contact);
//         } catch (error) {
//             res.status(500).json({ error: 'User creation failed' });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// }

export async function POST(request) {
    const {name, email, message} = await request.json()
    try {
        const contact = await prisma.contact.create({
            data: { name, email, message },
        });
        return new Response(JSON.stringify({success:true,data:contact}),{status: 200});
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({success:false}),{status:500});
    }
}


export async function GET() {
    try {
        const contact = await prisma.contact.findMany()
        return new Response(
            JSON.stringify(contact),
            {
                status: 200
            }
        );
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({success:false}),{status:500});
    }
}
