import Link from "next/link";

export default function AboutPage(){
  return(
    <div>
      <div>
        AboutPage
      </div>
      
      <div>
        <Link href="/">메인으로 돌아가기</Link>
      </div>
    </div>
  )
}

/*
  about 폴더안에 page.js
    localhost:3000/about
 */