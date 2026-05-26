"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"

import {
  Heart,
  MapPin,
  IndianRupee,
  Search
} from "lucide-react"

import { toast } from "sonner"

export default function Home() {

  const [colleges, setColleges] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [compare, setCompare] = useState<any[]>([])

  // FETCH DATA

  useEffect(() => {

    axios
      .get("http://localhost:5000/colleges")
      .then((response) => {

        setColleges(response.data)

      })

  }, [])

  // SEARCH FILTER

  const filtered = colleges.filter((college) =>

    college.name
      .toLowerCase()
      .includes(search.toLowerCase())

  )

  // SAVE COLLEGE

  const saveCollege = (college:any) => {

    const existing = JSON.parse(
      localStorage.getItem("saved") || "[]"
    )

    const alreadySaved = existing.find(
      (c:any)=>c.id === college.id
    )

    if(alreadySaved){

      toast.error("Already saved")
      return

    }

    existing.push(college)

    localStorage.setItem(
      "saved",
      JSON.stringify(existing)
    )

    toast.success("College saved")

  }

  // ADD TO COMPARE

  const addToCompare = (college:any) => {

    const exists = compare.find(
      (c)=>c.id === college.id
    )

    if(exists){

      toast.error("Already added")
      return

    }

    if(compare.length >= 3){

      toast.error("Maximum 3 colleges")
      return

    }

    setCompare([...compare, college])

    toast.success("Added to compare")

  }

  return (

    <main className="min-h-screen bg-white">

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <h1 className="text-4xl font-bold text-blue-600">
            CollegeHunt
          </h1>

          <Link href="/compare">

            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl">
              Compare
            </button>

          </Link>

        </div>

      </nav>

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-6xl font-bold leading-tight">
          Discover Your Dream College
        </h1>

        <p className="text-gray-500 text-xl mt-6">
          Compare colleges, placements and rankings.
        </p>

      </section>

      {/* SEARCH */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="flex items-center border rounded-2xl p-4">

          <Search className="w-5 h-5 text-gray-400"/>

          <input
            type="text"
            placeholder="Search colleges..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="ml-3 outline-none w-full"
          />

        </div>

      </section>

      {/* GRID */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filtered.map((college)=>(

            <div
              key={college.id}
              className="border rounded-3xl overflow-hidden bg-white hover:shadow-xl transition"
            >

              {/* IMAGE */}

              <div className="relative">

                <Image
                  src={college.image}
                  alt={college.name}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />

                <button
                  onClick={()=>saveCollege(college)}
                  className="absolute top-4 right-4 bg-white p-3 rounded-full shadow"
                >

                  <Heart className="w-5 h-5"/>

                </button>

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-bold">
                    {college.name}
                  </h2>

                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    #{college.nirf}
                  </span>

                </div>

                <div className="flex items-center gap-2 mt-3 text-gray-500">

                  <MapPin className="w-4 h-4"/>

                  <p>
                    {college.city}, {college.state}
                  </p>

                </div>

                {/* STATS */}

                <div className="mt-6 space-y-4">

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Average Package
                    </span>

                    <span className="font-semibold flex items-center">
                      <IndianRupee className="w-4 h-4"/>
                      {college.avgPackage}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Fees
                    </span>

                    <span className="font-semibold flex items-center">
                      <IndianRupee className="w-4 h-4"/>
                      {college.fees}
                    </span>

                  </div>

                </div>

                {/* BUTTONS */}

                <div className="flex gap-3 mt-8">

                  <Link
                    href={`/colleges/${college.slug}`}
                    className="flex-1"
                  >

                    <button className="w-full bg-blue-600 text-white py-3 rounded-2xl font-medium">
                      View Details
                    </button>

                  </Link>

                  <button
                    onClick={()=>addToCompare(college)}
                    className="border px-5 rounded-2xl"
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* COMPARE BAR */}

      {compare.length >= 2 && (

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

      )}

    </main>

  )
}