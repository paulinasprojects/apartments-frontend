import { Properties } from "@/lib/data";
import { useParams } from "react-router-dom"

const PropertyPage = () => {
  const {url} = useParams();
  const property = Properties.find((item) => item.url === url)!;

  return (
    <div className="flex flex-col gap-4 mt-5">
      <h2 className="text-3xl">{property.name}</h2>
    </div>
  )
}

export default PropertyPage