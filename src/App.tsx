import Header from "@/components/Header";
import TravelCard from "./components/TravelCard";
import { travelingList } from "@/assets/data/travel-list";
import type { Travel } from "@/assets/types/Travel";

function App() {
  return (
    <div className="app">
      <Header />
      {
        travelingList.map((travel: Travel, index: number) => (<>
          <TravelCard key={travel.id} {...travel} />
          {index === travelingList.length - 1 ? null : (
            <div className="bg-green-100 h-1 w-11/12 mx-auto rounded-full"></div>
          )}
        </>
        ))
      }
    </div>
  )
}

export default App
