import { Explore } from "@/components/explore"
import { Hero } from "@/components/hero"
import { MostRentalListings } from "@/components/most-rental-listings"

const Homepage = () => {
  return (
    <>
      <Hero/>
      <Explore/>
      <MostRentalListings/>
    </>
  )
}

export default Homepage