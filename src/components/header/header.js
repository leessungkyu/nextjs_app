import Link from "next/link";
import "./header.css";
import "./header-background";
import HeaderBackground from "./header-background";
import logimg from "@/assets/star.png";
import Image from "next/image";


//헤더 컴포넌트
export default function Header(){
  return(
    <>
    <HeaderBackground/>
    <header>
      <Link href="/"><h2><img src={logimg.src} alt="img"/></h2></Link>
      {/* <Image src={logimg}/>    nextjs의 이미지태그를 사용해도됨*/}
      <nav>
        <ul>
          <li>
            <Link href="/blog">블로그</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>          
        </ul>
      </nav>
    </header>
    </>
  )
}