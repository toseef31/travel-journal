import Globe from "@/components/icons/Globe";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center p-5 justify-center gap-2  bg-rose-800 text-white font-semibold rounded-md shadow-lg mb-10">
      <Globe />
      <h1 className="text-md">Travel Journal</h1>
    </header>
  )
}