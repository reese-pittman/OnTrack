
export default function RegisterHero() {
    return (
        <div className="bg-blue border border-gray-200 rounded-xl shadow-xl p-8 flex items-center justify-center max-w-md mx-auto mt-20 mb-20">
            <header>
                <h2 className="text-3xl font-bold">Create you account</h2>
                <p className="mt-4 text-gray-600">Start managing your workflows efficiently with OnTrack.</p>
            </header>
            <section className="flex flex-col gap-6">
                <div>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="username" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="e.g. John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="e.g. john.doe@company.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="......." />
                        <p className="text-sm text-gray-500">Must be at least 8 characters and include a number and special character.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" name="terms" id="terms" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.</label>
                </div>
                <div>
                    <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Create Account
                    </button>
                </div>
            </section>
        </div>
    )
}