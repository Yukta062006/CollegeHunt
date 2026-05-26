export default function Navbar(){
  return(
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between h-16">
        <h1 className="text-2xl font-bold text-blue-600">
          CollegeHunt
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
          Compare
        </button>
      </div>
    </nav>
  )
}