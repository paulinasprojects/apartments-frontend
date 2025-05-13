import { Link } from "react-router-dom"

export const MostRentalListings = () => {
  return (
    <div>
       <div className="flex flex-col items-center justify-center  max-sm:text-center md:text-center mt-5 md:px-4">
        <p className="md:text-[2.25rem] max-sm:text-[1.625rem]">The Most Rental Listings</p>
        <p className="text-[1.4rem] font-costarLight">Choose from over 1 million apartments, houses, condos, and townhomes for rent.</p>
      </div>
        <div className="my-10 flex items-center justify-center max-sm:px-4 md:px-4 xl:px-0">
          <div className="flex lg:flex-row md:flex-row max-sm:flex-col-reverse">
            <div className="flex flex-col gap-2 bg-[#f5f5f5] py-10 px-12 max-sm:py-5">
              <p className="font-costarRegular text-[1.75rem] mt-5">Renting Made Simple</p>
              <p className="font-costarLight">Browse the highest quality listings, apply online, sign your <br className="max-sm:hidden" /> lease, and even pay your rent from any device.</p>
              <Link to="#" className="hover:underline text-[#0f8ac0] mt-5 text-[20px]">Find Out More</Link>
            </div>
            <div>
              <img src="/most-rental.png" alt="" className="lg:w-[648px] lg:h-[296px] md:w-full md:h-full" />
            </div>
          </div>
        </div>
    </div>
  )
}
