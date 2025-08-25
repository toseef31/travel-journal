import { Travel } from "@/assets/types/Travel";
import LocationPin from "./icons/LocationPin";

export default function TravelCard(props: Travel) {
  const { title, description, imageUrl, location, googleMapsUrl, startDate, endDate } = props;
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src={imageUrl}
          alt={props.title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="col-span-12 md:col-span-8 pb-4">
        <div className="flex items-center mb-2">
          <LocationPin />
          <span className="font-bold uppercase me-3">{location}</span>
          <a href={googleMapsUrl} target="_blank"
            className="text-light text-xs underline hover:text-blue-500">View on Google Maps</a>
        </div>
        <h2 className="text-3xl font-semibold mb-2">{title}</h2>
        <h3 className="text-sm font-semibold">{startDate} - {endDate}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}