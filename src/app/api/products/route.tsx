import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "../../../../prisma/client";

export async function GET(){
    const products = await prisma.product.findMany();
    return NextResponse.json(products,{status: 201})
};

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status: 400})
    }
    const product = await prisma.product.findFirst({
        where: {name: body.name}
    })
    if(product)
        return NextResponse.json({error: 'Product is exit'},{status: 401})
    const newProduct = await prisma.product.create({
        data:{
            name: body.name,
            price: body.price
        }
    })
    return NextResponse.json(newProduct,{status:201})
}