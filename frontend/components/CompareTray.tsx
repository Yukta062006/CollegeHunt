"use client"

import Link from "next/link"

export default function CompareTray({
  compare
}:any){

  if(compare.length < 2) return null

  return(

    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white border shadow-lg rounded-3xl px-6 py-4 flex items-center gap-5 z-50">

      <p className="font-semibold">
        {compare.length} colleges selected
      </p>

      <Link href="/compare">

        <button className="bg-blue-600 text-white px-5 py-2 rounded-2xl">
          Compare Now
        </button>

      </Link>

    </div>

  )
}