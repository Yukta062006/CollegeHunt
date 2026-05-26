export default function Trending(){

  return(

    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex items-center justify-between mb-10">

        <h2 className="text-4xl font-bold">
          Trending Colleges
        </h2>

        <button className="text-blue-600 font-medium">
          View All
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

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

    </section>

  )
}