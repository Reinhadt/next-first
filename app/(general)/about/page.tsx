import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About',
 description: 'A la vío, al about...',
 keywords: ['About Page', 'omavalos', 'info', 'carne molida']
};

export default function AboutPage(){
  return (
    <>
      <span className="text-4xl">About page</span>
    </>
  )
}