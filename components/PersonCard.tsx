export default function PersonCard({ name, role, description, imageLink }: { name: string, role: string, description: string, imageLink: string }) {
    return (
        <div className="grid grid-cols-12 items-start">
            <div className="col-span-8 pt-12 grid grid-flow-row gap-12">
                <h2 className="font-black text-7xl tracking-tight">{name}</h2>
                <h4 className="font-bold uppercase text-2xl tracking-tight">{role}</h4>
                <p className="max-w-[50%]">{description}</p>
            </div>
            <div className="col-span-4 h-96">
                <img className="h-full object-cover w-full object-top" src={imageLink} alt="" />
            </div>
        </div>
    )
}