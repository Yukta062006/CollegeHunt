"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"

import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Trending from "@/components/Trending"
import Footer from "@/components/Footer"
import CompareTray from "@/components/CompareTray"

import { Heart, MapPin, IndianRupee } from "lucide-react"
import { toast } from "sonner"

export default function Home() {

  const [colleges, setColleges] = useState<any[]>([])
  const [search, setSearch] = useState("")
  const [compare, setCompare] = useState<any[]>([])

  useEffect(() => {

    axios
      .get("http://localhost:5000/colleges")
      .then((response) => {

        setColleges(response.data)

      })

  }, [])

  const filteredColleges = colleges.filter((college) =>

    college.name
      .toLowerCase()
      .includes(search.toLowerCase())

  )

  const addToCompare = (college:any) => {

    const exists = compare.find((c)=>c.id === college.id)

    if(exists){

      toast.error("College already added")
      return

    }

    if(compare.length >= 3){

      toast.error("Maximum 3 colleges allowed")
      return

    }

    setCompare([...compare, college])

    toast.success(`${college.name} added to compare`)

  }

  const saveCollege = (college:any) => {

    toast.success(`${college.name} saved successfully`)

  }

  return (

    <main className="min-h-screen bg-white">

      {/* NAVBAR */}

      <Navbar />

      {/* HERO */}

      <Hero />

      {/* STATS */}

      <Stats />

      {/* SEARCH + FILTERS */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col lg:flex-row gap-5">

          <input
            type="text"
            placeholder="Search colleges..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="flex-1 border rounded-2xl p-4 outline-none"
          />

          <select className="border rounded-2xl px-5 py-4">

            <option>All Streams</option>
            <option>Engineering</option>
            <option>Medical</option>

          </select>

          <select className="border rounded-2xl px-5 py-4">

            <option>All Types</option>
            <option>Government</option>
            <option>Private</option>

          </select>

        </div>

      </section>

      {/* TRENDING SECTION */}

      <Trending />

      {/* COLLEGE GRID */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-4xl font-bold">
              Top Colleges
            </h2>

            <p className="text-gray-500 mt-2">
              Discover the best colleges across India
            </p>

          </div>

          <button className="border px-6 py-3 rounded-2xl">
            View All
          </button>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredColleges.map((college) => (

            <div
              key={college.id}
              className="bg-white border rounded-3xl overflow-hidden hover:shadow-xl transition duration-300"
            >

              {/* IMAGE */}

              <div className="relative">

                <Image
                  src={
                    college.name === "IIT Bombay"
                      ? "/colleges/iitb.jpg"
                      : college.name === "IIT Delhi"
                      ? "/colleges/iitd.jpg"
                      : college.name === "IIT Madras"
                      ? "/colleges/iitm.jpg"
                      : college.name === "IIT Kharagpur"
                      ? "/colleges/iitkgp.jpg"
                      : college.name === "VIT Vellore"
                      ? "/colleges/vit.jpg"
                      : college.name === "SRM University"
                      ? "/colleges/srm.jpg"
                      : college.name === "Manipal Institute of Technology"
                      ? "/colleges/manipal.jpg"
                      : college.name === "IIIT Hyderabad"
                      ? "/colleges/iiith.jpg"
                      : "/colleges/bits.jpg"
                  }
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

                {/* TAGS */}

                <div className="flex gap-3 mt-6 flex-wrap">

                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {college.stream}
                  </span>

                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {college.type}
                  </span>

                </div>

                {/* BUTTONS */}

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

          ))}

        </div>

      </section>

      {/* COMPARE TRAY */}

      <CompareTray compare={compare} />

      {/* FOOTER */}

      <Footer />

    </main>

  )
}