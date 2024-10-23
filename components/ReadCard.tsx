export default function ReadCard({imageLink, tag, title, date}: {imageLink: string, tag: string, title: string, date: Date}) {
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
