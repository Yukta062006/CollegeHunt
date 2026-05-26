type Props = {
  params:{
    slug:string
  }
}

export default function CollegeDetail({
  params
}:Props){

  return(

    <main className="min-h-screen p-10">

      <h1 className="text-5xl font-bold">
        {params.slug}
      </h1>

      <p className="text-gray-500 mt-5">
        College details page
      </p>

    </main>

  )
}