import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export async function POST(req: NextRequest) {
    const data = await req.json()
    const res = await client.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    }).then(() => {
        console.log('User created.')
    })

    return Response.json({
        msg: 'User is logged in'
    })
}

export async function GET() {
    return Response.json({
        name: 'Priyanshu',
        anime: 'One piece'
    })
}