import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../../prisma/client";

interface Params {
    id: string;   
}

interface Props {
    params: Promise<Params>
}


export async function  GET(request: NextRequest,{params}: Props) {
    const {id} = await params;
      const userId = parseInt(id);

    const user = await prisma.user.findUnique({
        where: {id: id}
    })

    if(userId > 10)
        return NextResponse.json({error: 'User not Found'},{status: 404})
    return NextResponse.json(user)
}

export async function  PUT(request: NextRequest,{params}: Props) {
        const {id} = await params;

    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400})
    if(parseInt(id) > 10)
        return NextResponse.json({error: 'User not Found'},{status: 404})
    const user = await prisma.user.findUnique({
        where: {id : id}
    })

    if(!user)
        return NextResponse.json({error: "User not found"})
    const updateUser = await prisma.user.update({
        where: {id: user.id},
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(updateUser)
}

export async function  DELETE(request: NextRequest,{params}: Props) {
        const {id} = await params;

    if(parseInt(id) > 10)
        return NextResponse.json({error: 'User not Found'},{status: 404})
     const user = await prisma.user.findUnique({
        where: {id : id}
    });
    if(!user)
        return NextResponse.json({error: "User not found"})
    await prisma.user.delete({
        where: {id: user.id}})
    return NextResponse.json({})

    
}