export default function PageHeading({overline, title}: {overline: string, title: string}) {
    return (
        <div className="container mx-auto grid gap-8 pt-20 pb-24">
            <h4 className="uppercase font-bold text-2xl tracking-tight">{overline}</h4>
            <h1 className="font-black text-9xl leading-[0.8] tracking-tight">{title}</h1>
        </div>
    )
}