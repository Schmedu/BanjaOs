// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// // import { withAuth } from "next-auth/middleware"
// import { withAuth } from "next-auth/middleware"
// import {callback} from "next-auth/core/routes";
//
// // callbacks: {
// //     authorized: ({ token }) => token?.userRole === "admin",
// // }
//
// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname.startsWith('/about')) {
//         // This logic is only applied to /about
//     }
//
//     if (request.nextUrl.pathname.startsWith('/admin')) {
//         // This logic is only applied to /dashboard
//         return NextResponse.redirect('/login')
//
//
//     }
// }
//
//
// export default withAuth(
//     // `withAuth` augments your `Request` with the user's token.
//     function middleware(req) {
//         console.log(req.nextauth.token)
//     },
//     // {
//     //     callbacks: {
//     //         authorized: ({ token }) => token?.userRole === "admin",
//     //     },
//     // }
// )
//
//
// // export function middleware(request: NextRequest) {
// //     return NextResponse.rewrite(new URL('/about-2', request.url))
// // }
//
// // Supports both a single string value or an array of matchers
// export const config = {
//     matcher: ['/about/:path*', '/me/:path*'],
// }

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname.startsWith('/about')) {
//         // This logic is only applied to /about
//         return NextResponse.redirect(new URL('/about-2', request.url))
//     }
//
//     // if (request.nextUrl.pathname.startsWith('/admin')) {
//     //     return NextResponse.redirect(new URL('/client', request.url))
//     // }
//
// }

// See "Matching Paths" below to learn more
// export const config = {
//     // matcher: ['/about/:path*', '/admin/:path*'],
//     matcher: ['/about/:path*'],
// }

export { default } from "next-auth/middleware"
export const config = {
    // matcher: ['/about/:path*', '/admin/:path*'],
    matcher: ['/admin/:path*'],
}
