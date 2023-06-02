import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import axios from 'axios';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log('middlewareeee')
  await fetch('http://localhost:8800/ip', {method: 'post'})
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};