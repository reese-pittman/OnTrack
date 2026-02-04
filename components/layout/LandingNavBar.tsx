export default function NavBar() {
    return (
        <nav className="relative bg-gray-50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <div className="mr-4 sm:mr-6 lg:mr-8 max-w-screen px-3 sm:pr-6 lg:pr-8">
                <div className="relative flex h-16 items-center justify-between gap-8">

                    <div className="inset-y-0 left-0 flex items-center justify-start">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <img src="./public/logo.png" alt="OnTrack" className="h-8 w-auto" />
                        </button>
                    </div>


                    <div className="flex flex-1 items-center justify-center pl-30"> {/* <Need to figure out how to make these always centered im cheating using paddings> */}
                        
                        <div className="sm:ml-6">
                            <div className="flex space-x-4">

                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Features</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Pricing</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">About</a>

                            </div>
                        </div>
                    </div>


                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 justify-between space-x-4 gap-4">
                        <a href="#" className="text-white relative bg-[#0da2ff] rounded-md border-transparent hover:bg-[#009dff] shadow-xs font-medium leading-5 rounded-base text-sm px-5 py-2.5">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Log In</span>

                            Login
                        </a>

                        <a href="#" className="text-white relative bg-[#0234d2] rounded-md border-transparent hover:bg-[#2626ff] shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Register</span>

                            Get Started
                        </a>
                    </div>
                </div>
            </div>

            
        </nav>
    )
}