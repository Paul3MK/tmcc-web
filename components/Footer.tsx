function Footer() {

    return (
        <div className="border-t border-white py-12">
            <div className="container mx-auto grid grid-cols-12 grid-flow-col">
                <div className="col-span-3 grid grid-flow-row">
                    <div className="h-7 w-24 from-green-400 to-green-900 bg-gradient-to-tl"></div>
                    <p>hello@mico.com</p>
                </div>
                <div className="col-span-3">
                    <p className="font-black">Navigate</p>
                    <div className="pt-8">
                        <ul className="grid gap-8 justify-start">
                            <li className="border-transparent border-b hover:border-white"><a href="">Home</a></li>
                            <li className="border-transparent border-b hover:border-white"><a href="">Who</a></li>
                            <li className="border-transparent border-b hover:border-white"><a href="">Join</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-3">
                    <p className="font-black">Featured</p>
                    <div className="pt-8">
                        <ul className="grid gap-8 justify-start">
                            <li className="border-transparent border-b hover:border-white"><a href="">Summit Zero</a></li>
                            <li className="border-transparent border-b hover:border-white"><a href="">Rhythms</a></li>
                            <li className="border-transparent border-b hover:border-white"><a href="">Empty Canvas</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-3">
                    <p className="font-black">Follow</p>
                    <div className="pt-8">
                        <ul className="grid gap-8 justify-start">
                            <li className="border-transparent border-b hover:border-white"><a href="">Instagram</a></li>
                            <li className="border-transparent border-b hover:border-white"><a href="">YouTube</a></li>
                            <li className="border-transparent border-b hover:border-white"><a href="">X</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-32">
                <span className="font-black uppercase">© Millenium Collective {(new Date).getFullYear()}</span>
            </div>
        </div>
    )
}

export default Footer