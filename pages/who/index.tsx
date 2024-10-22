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
            <PageHeading overline="Meet the stewards" title="Who?" />
            <div className="h-96 w-full">
                <img src="ihor-malytskyi-QZ9PsYOfwuM-unsplash.jpg" alt="" className="h-full w-full object-cover object-bottom" />
            </div>
            <section className="container mx-auto flex py-24">
                <p className="max-w-[33%]">From us to you, {topName}, the culprits. These are they that have been made stewards of this collective, who are guilty of taking up responsibility when everyone else sleeps soundly.</p>
            </section>
            <section className="container mx-auto grid gap-12 pb-36">
                <PersonCard
                    name="Ewurama Mongson"
                    role="Creative Director"
                    description="The woman with whom it all began, Ewurama let the vision marinate for a while before finding others to work with."
                    imageLink="michael-dam-mEZ3PoFGs_k-unsplash.jpg"
                />
                <PersonCard
                    name="Jo Addo"
                    role="Community Manager"
                    description={`Jo’s got the finger on the pulse concerning all things community. ${topName}, if you know anyone on the team, chances are you know Jo.`}
                    imageLink="kelly-sikkema-FqqaJI9OxMI-unsplash.jpg"
                />
                <PersonCard
                    name="Adam Boateng"
                    role="Strategic Partner"
                    description="Adam is the guy who likes plan long-term things. Like, really long-term. We’re not entirely sure if he actually exists."
                    imageLink="grace-madeline-jZKD7-NzHtI-unsplash.jpg"
                />
            </section>
        </>
    )
}