import Image from "next/image";
import { worksans } from "@/fonts";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { motion } from "framer-motion"
import LoopingAnimation from "@/components/Example";
import Footer from "@/components/Footer";
import { NameContext } from "./_app";

export default function Home({setName}: {setName: Dispatch<SetStateAction<string>>}) {

  // const [name, setName] = useState<string>()
  const topName = useContext(NameContext)

  return (
    <div className="relative tracking-tight overflow-hidden text-lg">
      <div className="absolute top-0 h-[120vh] overflow-clip">
        <div className="bg-gradient-to-b from-transparent w-full h-full absolute top-0 to-black z-20" />
        <img src="ihor-malytskyi-QZ9PsYOfwuM-unsplash.jpg" alt="" className="z-10 top-0" />
      </div>
      <div
        className="container mx-auto pt-36 relative z-30 h-[120vh]"
      >
        <h1 className="text-9xl font-black tracking-tight max-w-2xl leading-[0.8]">The Millennial Christian.</h1>
        <div className="w-full py-24"></div>
        <p className="text-lg max-w-[428px] leading-6 tracking-tight">This is a community of Christ-centred whose hearts burn with the desire to see all people come to God and who firmly believe in true community: His body.</p>
        <div className="pt-11">
          <motion.span initial={{ x: 400 }} whileInView={{ x: -400 }} className="text-lg">Welcome, </motion.span>
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder="your name here" className="text-lg border border-white py-1 px-2 w-auto bg-transparent placeholder:text-white placeholder:italic outline-none" />
        </div>
      </div>
      <div>
        <img src="hannah-busing-gktFjKSWAmA-unsplash.jpg" alt="" className="w-full h-96" />
      </div>
      <div className="relative pb-48">
        <motion.div
          initial={{ x: `0%` }}
          animate={{ x: `-27%` }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="grid grid-flow-col absolute gap-[2%]"
        >
          <span className="text-[190px] font-black text-nowrap">{topName} has landed!</span>
          <span className="text-[190px] font-black text-nowrap">{topName} has landed!</span>
          <span className="text-[190px] font-black text-nowrap">{topName} has landed!</span>
          <span className="text-[190px] font-black text-nowrap">{topName} has landed!</span>
        </motion.div>
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-4 py-24">
        <div className="col-span-5">
          <p className="text-lg max-w-md">Okay, {topName}! The bread and butter of TMCC is our weekly meetings. We’re not a ministry or a church group, just a community. So when you meet us for the first time, you’re really coming to spend time with family you didn’t know you had!</p>
          <div className="py-24"></div>
          <button className="font-black py-2 px-3 uppercase text-lg border border-white">I'm in!</button>
        </div>
        <div className="col-span-7">
          <img src="marek-piwnicki-AsSyn1d2RNs-unsplash.jpg" alt="" className="object-cover w-full" />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-4 h-[80vh] py-24">
        <div className="col-span-5 flex flex-col justify-between h-[80vh]">
          <p className="pt-24 pb-32 text-lg">Family is a recurring theme for us. With Jesus as our eldest brother, we who believe all stand together as one, joining hands in worship of our Father. We’re all looking for genuine fellowship; we’ve got that much in common, {topName}!</p>
          <img src="oc-gonzalez-A-11N8ItHZo-unsplash.jpg" alt="" className="object-cover h-full" />
        </div>
        <div className="col-span-7 h-[80vh]">
          <img src="abhishek-kirloskar-z1V58WZiXpw-unsplash.jpg" alt="" className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-4">
        <motion.span
          className="font-black text-9xl col-span-10 col-start-3 py-48"
          initial={{opacity: 0.3}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          transition={{duration: 1, delay: 1}}
        >"I don't think I belong."</motion.span>
        <motion.span
          className="font-black text-9xl col-span-10 py-48"
          initial={{opacity: 0.3}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          transition={{duration: 1, delay: 1}}
        >"It doesn't feel genuine."</motion.span>
      </div>
      <div className="container mx-auto grid py-36 grid-cols-12">
        <p className="col-span-5 text-lg">Sounds familiar? Unfortunately, these phrases are all to common in our churches. Many of us are looking to do life together, beyond the polished, well-oiled events that are our Sunday services.</p>
      </div>
      <div className="h-80">
        <img src="wallace-henry-_OgsP9BvL20-unsplash.jpg" alt="" className="object-cover h-full w-full"/>
      </div>
      <div className="container mx-auto grid py-36 grid-cols-12">
        <p className="col-span-5 text-lg">TMCC exists to fill a gaping hole in the contemporary church. Yes, Sunday service is attractive, Instagram-worthy and “powerful”, but leaves many young people empty.</p>
      </div>
    </div>
  );
}
