export default function Stats_Features() {
    return (
        <div className="bg-gray-100">

            {/* Stats Section - White background */}
            <div className="bg-white border-t border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <li className="flex flex-col items-center gap-2">
                            <p className="text-4xl font-bold text-gray-900">10K+</p>
                            <p className="text-gray-600">Users</p>
                        </li>
                        <li className="flex flex-col items-center gap-2">
                            <p className="text-4xl font-bold text-gray-900">1M+</p>
                            <p className="text-gray-600">Submissions</p>
                        </li>
                        <li className="flex flex-col items-center gap-2">
                            <p className="text-4xl font-bold text-gray-900">40%</p>
                            <p className="text-gray-600">Time Saved</p>
                        </li>
                        <li className="flex flex-col items-center gap-2">
                            <p className="text-4xl font-bold text-gray-900">99%</p>
                            <p className="text-gray-600">Up Time</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Text Section - Gray background */}
            <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 flex flex-col gap-6 items-center text-center">
                <h2 className="text-5xl font-bold text-gray-900">Designed for Modern Organizations</h2>
                <p className="text-lg text-gray-600">Empower your team with professional-grade tools built for maximum efficiency and total transparency.</p>
            </div>

            {/* Feature Blocks - Gray background with white cards */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-5 bg-white p-8 rounded-lg shadow-md">
                        <div className="h-48 bg-gray-200 rounded-md"></div> {/* Placeholder for image */}
                        <h3 className="text-xl font-bold text-gray-900">Simplified Submissions</h3>
                        <p className="text-gray-600">Custom forms with intelligent logic and automated routing to ensure every task reaches the right person instantly.</p>
                    </div>
                    <div className="flex flex-col gap-5 bg-white p-8 rounded-lg shadow-md">
                        <div className="h-48 bg-gray-200 rounded-md"></div> {/* Placeholder for image */}
                        <h3 className="text-xl font-bold text-gray-900">Admin Oversight</h3>
                        <p className="text-gray-600">Gain complete control with role-based access, centralized audit logs, and status tracking at every organizational level.</p>
                    </div>
                    <div className="flex flex-col gap-5 bg-white p-8 rounded-lg shadow-md">
                        <div className="h-48 bg-gray-200 rounded-md"></div> {/* Placeholder for image */}
                        <h3 className="text-xl font-bold text-gray-900">Team Insights</h3>
                        <p className="text-gray-600">Visualize bottleneck trends and performance metrics with real-time dashboards designed for data-driven decisions.</p>
                    </div>
                </div>
            </div>

            {/* Get Started Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="flex flex-col justify-between gap-8 bg-[#0234d2] p-10 rounded-lg max-w-4xl mx-auto">
                    
                    <hgroup className="flex flex-col items-center text-center">
                        <p className="text-6xl text-white font-bold">Ready to optimize your team? Join Ontrack today.</p>
                    </hgroup>

                    
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-center text-gray-300 text-lg">Stop chasing status updates and start delivering results. Setup takes less than 10 minutes.</p>
                    </div>

                    
                    <div className="flex items-center justify-center gap-4 pb-2">
                        <a href="#" className="inline-block bg-[#17d4fc] rounded-md font-medium text-sm px-6 py-3">
                            Get Started Now
                        </a>
                        <a href="#" className="inline-block bg-white text-gray-900 rounded-md font-medium text-sm px-6 py-3">
                            Contact Sales
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}