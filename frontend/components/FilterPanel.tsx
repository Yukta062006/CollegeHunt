export default function FilterPanel(){

  return(
    <div className="bg-white border rounded-2xl p-5">
      <h2 className="font-semibold mb-4">
        Filters
      </h2>

      <select className="w-full border p-3 rounded-xl mb-4">
        <option>Engineering</option>
        <option>Medical</option>
      </select>

      <select className="w-full border p-3 rounded-xl">
        <option>Government</option>
        <option>Private</option>
      </select>
    </div>
  )
}
