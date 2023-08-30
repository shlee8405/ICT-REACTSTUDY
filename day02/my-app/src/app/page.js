import Image from "next/image";
import img1 from '/public/images/penguin3.jpg'

export default function Home() {
  return (
    <div>
      <h1> Welcome </h1>
      Hello, WEB!
      {/* 해당 이미지를 따로 import 하지 않으면 width, height를 반드시 지정하자 */}
      <p><Image alt=""  src="/images/download.jpg" width={100} height={100}></Image></p>
      <p><Image  alt="" src={img1} width={100} height={100}/></p>
    </div>
  )
}
