export default function RegisterHero() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-2 px-4">
            <div className="bg-white border border-gray-200 rounded-xl shadow-xl max-w-3xl w-full overflow-hidden flex">
                
                <div className="w-10 bg-gradient-to-b from-blue-500 to-cyan-500 flex-shrink-0"></div>
                
                {/* Content */}
                <div className="p-10 flex gap-8 flex-1">
                    
                    {/* Header */}
                    <header className="flex flex-col items-center justify-center">
                        <h2 className="text-5xl font-bold text-gray-900">Create your account</h2>
                        <p className="mt-3 text-blue-600 text-lg">Start managing your workflows efficiently with OnTrack.</p>
                    </header>

                    <section className="flex flex-col gap-3">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input 
                                type="text" 
                                id="username" 
                                className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                placeholder="e.g. John Doe" 
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                placeholder="e.g. john.doe@company.com" 
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                                placeholder="••••••••" 
                            />
                            <p className="mt-2 text-xs text-gray-500">
                                Must be at least 8 characters and include a number and special character.
                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <input 
                                type="checkbox" 
                                name="terms" 
                                id="terms" 
                                className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
                            />
                            <label htmlFor="terms" className="text-sm text-gray-700">
                                I agree to the{' '}
                                <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
                                    Terms of Service
                                </a>
                                {' '}and{' '}
                                <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
                                    Privacy Policy
                                </a>.
                            </label>
                        </div>

                        <button className="w-full bg-indigo-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Create Account
                        </button>

                        <div className="text-center pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <a href="/auth/login" className="text-indigo-600 hover:text-indigo-500 font-medium">
                                    Log In
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}