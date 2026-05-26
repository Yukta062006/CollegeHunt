"use client"

import Image from "next/image"
import { Heart } from "lucide-react"
import { toast } from "sonner"

export default function CollegeCard({
  college,
  addToCompare
}:any){

  const saveCollege=()=>{

    toast.success("College saved successfully")

  }

  return(

    <div className="bg-white border rounded-3xl overflow-hidden hover:shadow-xl transition duration-300">

      <div className="relative">

        <Image
          src={college.image}
          alt={college.name}
          width={500}
          height={300}
          className="w-full h-56 object-cover"
        />

        <button
          onClick={saveCollege}
          className="absolute top-4 right-4 bg-white p-3 rounded-full"
        >

          <Heart className="w-5 h-5"/>

        </button>

      </div>

      <div className="p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            {college.name}
          </h2>

          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            #{college.nirf}
          </span>

        </div>

        <p className="text-gray-500 mt-2">
          {college.city}, {college.state}
        </p>

        <div className="mt-6 space-y-4">

          <div className="flex justify-between">

            <span className="text-gray-500">
              Average Package
            </span>

            <span className="font-semibold">
              ₹{college.avgPackage}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">
              Fees
            </span>

            <span className="font-semibold">
              ₹{college.fees}
            </span>

          </div>

        </div>

        <div className="flex gap-3 mt-8">

          <button className="flex-1 bg-blue-600 text-white py-3 rounded-2xl font-medium">
            View Details
          </button>

          <button
            onClick={()=>addToCompare(college)}
            className="border px-5 rounded-2xl"
          >
            +
          </button>

        </div>

      </div>

    </div>

  )
}