type Props={
  search:string
  setSearch:(value:string)=>void
}

export default function SearchBar({search,setSearch}:Props){
  return(
    <input
      type="text"
      placeholder="Search colleges..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className="w-full border rounded-2xl p-4 outline-none"
    />
  )
}