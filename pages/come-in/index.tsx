import PageHeading from "@/components/PageHeading"
import Image from "next/image"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  name: string,
  email: string,
  referralMethod: "search" | "social" | "friend"
}

export default function ComeInPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <>
      <PageHeading overline="You're invited" title="Come in." />
      <section className="container mx-auto grid grid-cols-12 gap-4 pb-36">
        <div className="col-span-4 relative flex flex-col justify-between">
          <p>We’d love to have you join us. We can’t say it enough: it isn’t about what you can do! Just come in and be. <br />If you do want to help in some way, however, let us know in the comments box!</p>
          <div className="w-full">
            <Image src="/abhishek-kirloskar-z1V58WZiXpw-unsplash.jpg" alt="person" height={320} width={500} />
          </div>
        </div>
        <div className="col-span-7 col-start-6">
          <form className="grid gap-8">
              <label className="grid gap-4">
                <p className="uppercase pl-4">Name*</p>
                <input type="text" className="border border-white bg-transparent px-4 py-2" {...register("name")} />
              </label>
            <label className="grid gap-4">
              <p className="uppercase pl-4">Email*</p>
              <input type="text" className="border border-white bg-transparent px-4 py-2" {...register("email")} />
            </label>
            <label className="grid gap-4">
              <p className="uppercase pl-4">How did you hear about us?</p>
              <div className="border border-white w-full">
              <select className="bg-transparent px-4 py-2 border-white outline-white w-full">
                <option value="social">Social</option>
                <option value="friend">Friend</option>
                <option value="search">Online search</option>
              </select>
              </div>
            </label>
            <div className="grid gap-4">
              <p className="uppercase pl-4">Comments + suggestions</p>
              <textarea rows={8} className="w-full bg-transparent px-4 py-2 border border-white"/>            </div>
            <div className="grid gap-4">
              <input type="submit" className="bg-transparent border border-white hover:border-transparent hover:bg-white text-white hover:text-black font-black uppercase px-4 py-2" value="Submit" onSubmit={handleSubmit(onSubmit)} />
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
