'use client'
import dynamic from "next/dynamic";
// import { getServerSession } from "next-auth";
// import ProductCard from "./components/ProductCard";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import Link from "next/link";
// import Image from "next/image";
// import { Metadata } from "next";
import { useState } from "react";
// import banner from '../../public/images/banner.png'

const HeavyComponent = dynamic(() => import('./components/HeavyComponent'),
{ 
  loading: () => <p>Loading...</p>,
  ssr: false});
export default  function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible,setIsVisible] = useState(false)
  // console.log(session)
  return (
    <main className="relative h-screen">
      <button onClick={() => setIsVisible(true)}>Show</button>
      {isVisible && <HeavyComponent/>}
      {/* <Image src="https://bit.ly/react-cover" alt="banner" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={100} priority /> */}
    </main>
  );
}

// export async function generatedMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title: 'product.title',
//     description: '.....'
//   }
// }