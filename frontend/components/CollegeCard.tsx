import Image from "next/image"

export default function CollegeCard({college}:any){

  return(
    <div className="bg-white border rounded-3xl overflow-hidden">

      <Image
        src={college.image}
        alt={college.name}
        width={500}
        height={300}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {college.name}
          </h2>

          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            #{college.nirf}
          </span>
        </div>

        <p className="text-gray-500 mt-2">
          {college.city}, {college.state}
        </p>

        <div className="mt-5 space-y-2">

          <div className="flex justify-between">
            <span>Average Package</span>
            <span className="font-semibold">
              ₹{college.avgPackage}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Fees</span>
            <span className="font-semibold">
              ₹{college.fees}
            </span>
          </div>

        </div>

        <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-2xl">
          View Details
        </button>

      </div>
    </div>
  )
}