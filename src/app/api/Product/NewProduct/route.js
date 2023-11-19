import {NextResponse} from "next/server";
import {headers} from "next/headers";

// export const GET=async (req,res)=>{
//     const { searchParams  }=new URL(req.url);
//     const id2 =searchParams
//     return NextResponse.json({message:"This is get response",data:id2})
// }
export const GET=async (req,res)=>{
    const { searchParams  }=new URL(req.url);
    const  getData=searchParams.get("id");
    return NextResponse.json({message:"This is get response",data:getData})
}
export const POST=async (req,res)=>{
    const headerlist=headers();
    const cookies=headerlist.get("Cookie");
    const realcookie= req.cookies.get("mycookie");
    return NextResponse.json({message:"This is post response",catchcookie:cookies,solidCookie:realcookie.value})
}
export const PUT=async (req,res)=>{
    return NextResponse.json({message:"This is put response"})
}
export const DELETE=async (req,res)=>{
    return NextResponse.json({message:"This is DELETE response"})
}