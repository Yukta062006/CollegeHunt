export default function Footer(){

  return(

    <footer className="border-t mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">

        <h1 className="text-3xl font-bold text-blue-600">
          CollegeHunt
        </h1>

        <div className="flex gap-8 mt-5 md:mt-0 text-gray-500">

          <button>About</button>
          <button>Colleges</button>
          <button>Compare</button>
          <button>Contact</button>

        </div>

      </div>

    </footer>

  )
}