export default function Footer() {
    return (
        <footer className="relative bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                <div className="flex flex-col gap-8">

                    
                    {/* Logo and Links Section */}
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-4">
                            <img src="/logo.png" alt="OnTrack Logo" className="h-12 w-auto" />
                            <p className="text-sm text-gray-600 max-w-xs">The enterprise-ready workflow solution for high-performing teams. Built for scale, security, and simplicity.</p>
                            <div className="flex gap-4">
                                <a href="#" className="text-gray-600 hover:text-gray-900">share</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">website</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">email</a>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="flex gap-50">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">Product</h3>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Security</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Automations</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">Resources</h3>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help Center</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contacts</a>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">Company</h3>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Careers</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Blog</a>
                                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Legal</a>
                            </div>
                        </div>
                    </div>


                    {/* Copyright Section */}
                    <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500">© 2026 OnTrack, Inc. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}