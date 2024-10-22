import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { createContext, useState } from "react";


export const NameContext = createContext<null | string>(null)


export default function App({ Component, pageProps }: AppProps) {
  const [ name, setName ] = useState<string | null>(null)


  return (
    <NameContext.Provider value={name}>
      <Layout>
        <Component setName={setName} {...pageProps} />
      </Layout>
    </NameContext.Provider>
  )
}
