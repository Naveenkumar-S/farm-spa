import { NextResponse } from 'next/server'
import _ from 'lodash'
 
export function middleware(request) {
  // if (request.nextUrl.pathname.startsWith('/login')) {
  //   if (request.cookies.has('jwt')) {
  //     return NextResponse.redirect(new URL('/', request.url))
  //   }
  // }
  if (request.nextUrl.pathname === '/') {
    if (!request.cookies.has('jwt')) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  return NextResponse.next()
}