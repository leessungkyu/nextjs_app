import Link from "next/link";

export default function BlogPage(){
  return(
    <div>
      <div>
        <h1>BlogPage</h1>
        <p><Link href="/blog/post-1">게시글 1</Link></p>
        <p><Link href="/blog/post-2">게시글 2</Link></p>
      </div>
      
      <div>
        <Link href="/">메인으로 돌아가기</Link>
      </div>
    </div>
  )
}

//하나의 블로그에는 무수히 많은 게식글이 있을 수 있음
//일일이 URL로 만들어줄수 없음
//동적 URL을 사용(동적 라우트)
//폴더명을 [] 감싸줌
//[slug]

//blog 폴더 밑에 [slug] 폴더를 만들면 (+page.js까지 생성)
// /blog/~ 로 이동가능
