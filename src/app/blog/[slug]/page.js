//로딩 게시글페이지마다 글이 달라야하니깐
//매개변수로 {params}로 받는다.
// {params.폴더명} -> 동적 UR명

export default function BlogPostPage({params}){
  return(
    <>
      <h1>블로그 게시글</h1>
      <p>{params.slug}</p>
    </>
  )
}

// {params} : 동적 라우트에서 사용되는 매개변수
// 동적라우트 설정하려면 폴더명에 []