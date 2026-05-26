import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/colleges", (req, res) => {

  res.json([

    {
      id:1,
      slug:"iit-bombay",
      name:"IIT Bombay",
      city:"Mumbai",
      state:"Maharashtra",
      image:"/colleges/iitb.jpg",
      nirf:1,
      fees:220000,
      avgPackage:2500000
    },

    {
      id:2,
      slug:"iit-delhi",
      name:"IIT Delhi",
      city:"Delhi",
      state:"Delhi",
      image:"/colleges/iitd.jpg",
      nirf:2,
      fees:210000,
      avgPackage:2400000
    },

    {
      id:3,
      slug:"bits-pilani",
      name:"BITS Pilani",
      city:"Pilani",
      state:"Rajasthan",
      image:"/colleges/bits.jpg",
      nirf:7,
      fees:500000,
      avgPackage:1800000
    }

  ])

})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})