import Link from "next/link"
import { worksans } from "@/fonts"

export default function Navbar() {
  return (
    <div className="flex justify-between w-full p-6">
      <Link href="/">
        <div>LOGO</div>
      </Link>
      <div className="grid gap-7 grid-flow-col">
        <Link href="who/" className={`${worksans.className} font-black text-white text-2xl uppercase tracking-tighter`}>Who</Link>
        <Link href="what/" className={`${worksans.className} font-black text-white text-2xl uppercase tracking-tighter`}>What</Link>
        <Link href="read/" className={`${worksans.className} font-black text-white text-2xl uppercase tracking-tighter`}>Read</Link>
        {/* <Link href="#" className={`${worksans.className} font-black text-white text-2xl uppercase tracking-tighter`}>Ears</Link> */}
        <Link href="come-in/" className={`${worksans.className} font-black text-white text-2xl uppercase tracking-tighter`}>Come in</Link>
      </div>
    </div>
  )
}
