import { NextRequest, NextResponse } from "next/server";
 
export  async  function middleware (request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/login' || path === '/register';
    const token =  await  localStorage.getItem('token') || ''; 

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

 export const config = {
    matcher: [
        '/'
    ],
}