"use client"

import {
  Search,
  Bell,
  Heart
} from "lucide-react"

export default function Navbar(){

  return(

    <nav className="sticky top-0 z-50 bg-white border-b">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-10">

          <h1 className="text-4xl font-bold text-blue-600">
            CollegeHunt
          </h1>

          <div className="hidden md:flex items-center border rounded-2xl px-4 py-2 w-[400px]">

            <Search className="w-5 h-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search colleges..."
              className="ml-3 outline-none w-full"
            />

          </div>

        </div>

        <div className="flex items-center gap-4">

          <button className="relative border p-3 rounded-2xl">

            <Bell className="w-5 h-5"/>

            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"/>

          </button>

          <button className="border p-3 rounded-2xl">

            <Heart className="w-5 h-5"/>

          </button>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium">
            Compare
          </button>

        </div>

      </div>

    </nav>

  )
}