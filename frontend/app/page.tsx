"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"

export default function Home() {

  const [colleges, setColleges] = useState<any[]>([])

  useEffect(() => {

    axios
      .get("http://localhost:5000/colleges")
      .then((response) => {

        setColleges(response.data)

      })

  }, [])

  return (

    <main className="min-h-screen bg-white">

      {/* NAVBAR */}

      <nav className="border-b bg-white sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <h1 className="text-3xl font-bold text-blue-600">
            CollegeHunt
          </h1>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-2xl">
            Compare
          </button>

        </div>

      </nav>

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Discover Your Dream College
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Compare placements, fees, rankings and make smarter decisions.
        </p>

      </section>

      {/* SEARCH */}

      <div className="max-w-7xl mx-auto px-6">

        <input
          type="text"
          placeholder="Search colleges..."
          className="w-full border rounded-2xl p-4 outline-none"
        />

      </div>

      {/* COLLEGE GRID */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {colleges.map((college) => (

            <div
              key={college.id}
              className="bg-white border rounded-3xl overflow-hidden hover:shadow-lg transition"
            >

              <Image
               src={
  college.name === "IIT Bombay"
    ? "/colleges/iitb.jpg"
    : college.name === "IIT Delhi"
    ? "/colleges/iitd.jpg"
    : "/colleges/bits.jpg"
}
                alt={college.name}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

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

                <div className="mt-6 space-y-3">

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

                <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-2xl">
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>

  )
}