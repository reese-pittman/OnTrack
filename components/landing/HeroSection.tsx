export default function HeroSection() {
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left: Text Content */}
                    <div className="flex flex-col gap-6">
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Trusted by 1000+ teams</p>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Streamline Your Team's Workflow with OnTrack
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Empower your team to deliver results faster with our intuitive project management solution designed for high-performing teams.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#" className="inline-block bg-[#0234d2] text-white text-center rounded-md hover:bg-blue-700 font-medium text-base px-6 py-3 transition-colors">
                                Start Free Trial
                            </a>
                            <a href="#" className="inline-block bg-gray-800 text-white text-center rounded-md hover:bg-gray-900 font-medium text-base px-6 py-3 transition-colors">
                                Watch Demo
                            </a>
                        </div>
                    </div>

                    {/* Right: Hero Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img 
                            src="/hero-image.png" 
                            alt="OnTrack Dashboard Preview" 
                            className="w-full max-w-2xl h-auto rounded-lg shadow-2xl border border-gray-200" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}