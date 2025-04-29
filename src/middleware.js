import { NextResponse } from 'next/server'
import _ from 'lodash'
 
export function middleware(request) {
  // if (request.nextUrl.pathname.startsWith('/login')) {
  //   if (request.cookies.has('jwt')) {
  //     return NextResponse.redirect(new URL('/', request.url))
  //   }
  // }
  // https://stackoverflow.com/questions/76603369/how-to-use-multiple-middlewares-in-next-js-using-the-middleware-ts-file
  if (request.nextUrl.pathname === '/') {
    if (!request.cookies.has('jwt')) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  return NextResponse.next()
}