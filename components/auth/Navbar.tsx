
export default function Navbar({ page }: { page: string }) {


    if (page === "Login") {
        return (
            <nav className="relative bg-gray-50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                <div className="mr-4 sm:mr-6 lg:mr-8 max-w-screen px-3 sm:pr-6 lg:pr-8 flex items-center justify-between h-16">
                    <a href="/">
                        <img src="/logo.png" alt="OnTrack Logo" className="h-8 w-auto" />
                    </a>
                    <a href="/help" className="text-white relative bg-[#0234d2] rounded-md border-transparent hover:bg-[#2626ff] shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5">Help</a>
                </div>
            </nav>
        )
    } else {
        return (
            <nav className="relative bg-gray-50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                <div className="mr-4 sm:mr-6 lg:mr-8 max-w-screen px-3 sm:pr-6 lg:pr-8 flex items-center justify-between h-16">
                    <a href="/">
                        <img src="/logo.png" alt="OnTrack Logo" className="h-8 w-auto" />
                    </a>
                    <div className="flex items-center gap-4">
                        <p className="text-blue-100 font-sm">Already have an account?</p>
                        <a href="/auth/login" className="text-white relative bg-[#0234d2] rounded-md border-transparent hover:bg-[#2626ff] shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5">Log In</a>
                    </div>
                </div>
            </nav>
        )
    }
}


