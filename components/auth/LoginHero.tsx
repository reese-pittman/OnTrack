
export default function LoginHero() {
    return (
        <div className="bg-blue border border-gray-200 rounded-xl shadow-xl p-8 flex items-center justify-center max-w-md mx-auto mt-20 mb-20">
            <section className="flex flex-col gap-6">
                <div>
                    <img src="" alt="" /> {/* <This will be an icon just dont know really how> */}
                </div>
                <div className="flex flex-col justify-between gap-20">
                    <hgroup>
                        <h2 className="text-3xl ">Welcome Back!</h2>
                        <p>Log in to your OnTrack workspace</p>
                    </hgroup>
                    <div>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email address" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <a href="/auth/forgot-password">Forgot Password?</a>
                        </div>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />{/* <Need to figure out how to add icon ot the end of the bar> */}
                    </div>
                    <span>
                        <button>
                            Sign In
                        </button>
                        <p>-------- or --------</p>
                        <button>
                            Continue with Google
                        </button>
                    </span>
                    <div>
                        <p>Don't have an account?</p>
                        <a href="/auth/register">Create an Account</a>
                    </div>
                </div>
            </section>
        </div>
    )
}