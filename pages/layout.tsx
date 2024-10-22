import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { worksans } from "@/fonts";
import { Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (

        <div className={`${worksans.className} tracking-tight text-lg`}>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}