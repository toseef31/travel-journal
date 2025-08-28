import { travelingList } from "@/assets/data/travel-list"
import { Travel } from "@/assets/types/Travel"
import { useLocation } from "react-router-dom"

export default function PlaceDetails() {
  const location = useLocation();
  console.log('Current path:', location);
  return (
    <>
      {
        travelingList
          .filter((travel: Travel) => travel.id === 1)
          .map(travel =>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 md:col-span-6">
                <div className="h-[300px] max-h-[300px] w-full">
                  <img src={travel.imageUrl} alt={travel.title} className="h-full w-full object-cover object-top" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <h1 className="text-3xl font-semibold ">{travel.title}</h1>
              </div>
            </div>
          )
      }
    </>
  )
}




