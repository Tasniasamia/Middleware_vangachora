import {NextResponse} from "next/server";
import {headers} from "next/headers";

export const GET=(req,res)=>{
    const headerlist=headers()
    console.log(headerlist.get("email"))
    return NextResponse.json({msg:"Success",Id:headerlist.get("userid"),email:headerlist.get("email")})
}
