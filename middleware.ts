import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

/**
 * 현재 프로젝트에서는 NextAuth 인증 체크만 하고 있지만,
 * 미들웨어는 서버와 클라이언트 사이에서 다양한 작업을 수행할 수 있습니다.
 * 
  1. 인증/인가 체크
  export function middleware(request: NextRequest) {
    // 토큰 체크
    const token = request.cookies.get('token')
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  2. 헤더 수정
  export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    response.headers.set('x-custom-header', 'custom-value')
    return response
  }

  3.국제화 처리
  export function middleware(request: NextRequest) {
    const locale = request.cookies.get('NEXT_LOCALE')
    if (!locale) {
      return NextResponse.redirect(new URL(`/ko${request.nextUrl.pathname}`, request.url))
    }
  }

  4. 리다이렉션
  export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/old-path') {
      return NextResponse.redirect(new URL('/new-path', request.url))
    }
  }

  5. 요청/응답 로깅
  export function middleware(request: NextRequest) {
    console.log('Request path:', request.nextUrl.pathname)
    const response = NextResponse.next()
    response.headers.set('x-response-time', Date.now().toString())
    return response
  }
 */
