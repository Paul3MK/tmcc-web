import Link from "next/link";

export default function ReadCard({imageLink, tag, title, date}: {imageLink: string, tag: string, title: string, date: Date}) {
    return (
        <Link href="#" className="group">
            <img src={imageLink} alt="" className="h-80 w-full object-cover" />
            <div className="border border-white group-hover:border-transparent group-hover:bg-white px-2 py-1 my-6 inline-block">
                <span className="uppercase group-hover:text-black">{tag}</span>
            </div>
            <div className="grid gap-3">
                <h3 className="text-4xl font-black">{title}</h3>
                <span>{date.toLocaleDateString()}</span>
            </div>
        </Link>
    )
}
