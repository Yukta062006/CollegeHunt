export default function ComparePage(){

  return(

    <main className="min-h-screen p-10">

      <h1 className="text-5xl font-bold mb-10">
        Compare Colleges
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border rounded-3xl p-8">
          IIT Bombay
        </div>

        <div className="border rounded-3xl p-8">
          IIT Delhi
        </div>

        <div className="border rounded-3xl p-8">
          BITS Pilani
        </div>

      </div>

    </main>

  )
}