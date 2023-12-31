import React from "react"
import Image, { StaticImageData } from "next/image"

type Suite = {
    img: StaticImageData;
    name: string;
    price: number;
  }

export default function SuiteCard({ img, name, price }: Suite) {

  return (
    <div className="relative">
      <Image className="rounded" width={400} src={img} alt="imgAlt"/>
      <div className="bg-white rounded-b absolute bottom-0 w-full p-5">
        <div>
          <div className="text-xs text-slate-600 uppercase font-bold tracking-wider">{}</div>
          <div className="font-bold text-slate-700 leading-snug">
            <a href="url" className="hover:underline">{name}</a>
        </div>
        <div className="mt-2 text-sm text-slate-600">{price}</div>
      </div>
    </div>
  </div >
    )
}
