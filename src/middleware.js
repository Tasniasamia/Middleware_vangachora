 import {NextResponse} from "next/server";

export const middleware=(req,res)=> {
    if (req.nextUrl.pathname.startsWith('/api/Product/NewProduct')) {
        console.log("product middleware");
        const respno = NextResponse.next();
        respno.headers.set('number', '24234234');

        return respno;
    }
    if (req.nextUrl.pathname.startsWith('/api/Product')) {
        const reqheaders = new Headers(req.headers);
        const id = reqheaders.get('userID');
        console.log("middleware userID", id);
        reqheaders.set("email", "abc@gmail.com");
        reqheaders.set("userid", id);

        return NextResponse.next({
            request: {headers: reqheaders}
        })
    }
}
// }NextResponse
//
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
//
// const sendMailer = async () => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'sharintasnia1@gmail.com',
//             pass: 'TasHan181793',
//         },
//     });
//
//     const mailOptions = {
//         from: 'sharintasnia1@gmail.com',
//         to: 'sharintasnia1@gmail.com',
//         subject: 'Test Email',
//         text: 'This is a test email from your application.',
//     };
//
//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully');
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// };
//
// export const middleware = (req, res) => {
//     if (req.nextUrl.pathname.startsWith('/api/Product/NewProduct')) {
//         console.log('product middleware');
//         const respno = NextResponse.next();
//         respno.headers.set('number', '24234234');
//         sendMailer();
//         return respno;
//     }
// };
