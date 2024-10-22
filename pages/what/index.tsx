import PageHeading from "@/components/PageHeading"
import { motion } from "framer-motion"
import { ReactNode, useState } from "react"

export default function WhatPage() {

    const [text, setText] = useState<ReactNode>(Paragraph)

    return (
        <>
            <PageHeading overline="The stuff we do" title="What?"/>
            <section className="container mx-auto grid grid-cols-12 grid-rows-6 gap-4 h-[760px] pb-36">
                <div className="bg-gradient-to-t from-slate-200 to-slate-800 col-start-1 col-span-5 row-start-1 row-span-2" onMouseEnter={() => setText(<ProjectTitle title="Project One" />)} onMouseLeave={() => setText(Paragraph)}></div>
                <div className="bg-gradient-to-t from-slate-200 to-slate-800 col-start-6 col-span-7 row-start-1 row-span-3" onMouseEnter={() => setText(<ProjectTitle title="Project Two" />)} onMouseLeave={() => setText(Paragraph)}></div>
                <motion.div
                    className="bg-gradient-to-t col-start-1 col-span-3 row-start-3 row-span-2"
                    initial={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {text}
                </motion.div>
                <div className="bg-gradient-to-t from-slate-200 to-slate-800 col-start-5 col-span-1 row-start-3 row-span-2"></div>
                <div className="bg-gradient-to-t from-slate-200 to-slate-800 col-start-6 col-span-5 row-start-4 row-span-1"></div>
                <div className="bg-gradient-to-t from-slate-200 to-slate-800 col-start-11 col-span-2 row-start-4 row-span-2"></div>
                <div className="bg-gradient-to-t from-slate-200 to-slate-800 col-start-1 col-span-4 row-start-5 row-span-2"></div>
                <div className="bg-gradient-to-t from-slate-200 to-slate-800 col-start-5 col-span-4 row-start-5 row-span-2"></div>
                <div className="bg-gradient-to-t from-slate-200 to-slate-800 col-start-9 col-span-2 row-start-5 row-span-2"></div>
                <div className="bg-gradient-to-t from-slate-200 to-slate-800 col-start-11 col-span-2 row-start-6 row-span-1"></div>

            </section>
        </>
    )
}


function Paragraph() {
    return (
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            What does TMCC do? Good question. We’re passionate about community more than anything else, so our stuff reflects that. Stuff meaning hangouts, live music events, YouTube, podcasts, visual art... you get the idea. So we’d rather show, not tell. Click away!
        </motion.p>
    )
}

function ProjectTitle({ title }: { title: string }) {
    return (
        <motion.span
            className="font-black text-2xl"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, ease: "easeInOut"}}
        >{title}
        </motion.span>
    )
}