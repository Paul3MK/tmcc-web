import PageHeading from "@/components/PageHeading"
import { motion } from "framer-motion"
import { ReactNode, useState } from "react"
import { useContext } from "react"
import { NameContext } from "../_app"
import PersonCard from "@/components/PersonCard"

export default function WhoPage() {

    const topName = useContext(NameContext)

    return (
        <>
            <PageHeading overline="Psalm 45:1" title="Read." />
            <section className="container mx-auto pb-36 grid gap-14">
                <div>
                    <img src="anuja-tilj-p5V7tclGjcw-unsplash.jpg" alt="" className="h-80 w-full object-cover" />
                    <div className="border border-white px-2 py-1 my-6 inline-block">
                        <span className="uppercase">FEATURED</span>
                    </div>
                    <div className="grid gap-3">
                        <h3 className="text-4xl font-black">Is <em>The Chosen</em> okay?</h3>
                        <span>{(new Date()).toLocaleDateString()}</span>
                    </div>
                </div>
                <ReadCard
                    title="Are we obsessed with marriage?"
                    tag="Featured"
                    date={new Date()}
                    imageLink="TJDR7931.jpg"
                />
            </section>
        </>
    )
}

function ReadCard({imageLink, tag, title, date}: {imageLink: string, tag: string, title: string, date: Date}) {
    return (
        <div>
            <img src={imageLink} alt="" className="h-80 w-full object-cover" />
            <div className="border border-white px-2 py-1 my-6 inline-block">
                <span className="uppercase">{tag}</span>
            </div>
            <div className="grid gap-3">
                <h3 className="text-4xl font-black">{title}</h3>
                <span>{date.toLocaleDateString()}</span>
            </div>
        </div>
    )
}