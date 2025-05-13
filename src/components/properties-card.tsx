import { Link } from "react-router-dom";
import { PropertiesCardData } from "@/lib/data";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { Separator } from "./separator";

export const PropertiesCard = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1 gap-6 mt-6">
          {PropertiesCardData.map((property) => (
          <Card className="w-full xl:w-[320px] lg:w-[235px] md:w-[340px] max-sm:w-[340px] h-full !border-gray-300 border-[0.5px] shadow-none hover:shadow-lg cursor-pointer transition-shadow duration-150 rounded-lg" key={property.id}>
            <CardContent className="!p-0">
              <Link to={`/${property.url}`}>
                <img src={property.image} alt="" className="rounded-tl-lg rounded-tr-lg md:w-[340px] max-sm:w-[340px]" />
              </Link>
              <div className="mt-4">
                <p className="text-center font-light text-lg">{property.name}</p>
              </div>
              <div className="text-center mt-8">
                <p className="text-[15px] font-light">{property.addressLine1}</p>
                <p className="text-[15px] font-light">{property.addressLine2}</p>
                <p className="my-4 mx-4 text-[14px] font-light">{property.type} | {property.prices}</p>
              </div>
            </CardContent>
          </Card>
          ))}
        </div>
        <Button size="lg" className="bg-[#427b02] text-lg font-bold hover:bg-[#2c381d]">View More</Button>
      </div>
      <div className="px-7 py-7">
        <Separator/>
      </div>
    </div>
  )
}
