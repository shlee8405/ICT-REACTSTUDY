import Image from 'next/image';
import img1 from '/public/images/penguin4.jpg'

export default function Create() {
    
    return(
        <>
        Create!!  (/create)
        <p><Image alt="" src={img1} width={100} height={100}/></p>

        </>
    );
}