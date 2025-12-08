import Link from "next/link";
import Image from "next/image";

export default function Login() {
    return (
        <div className="wrapper">
            <div className="grid login-screen flow flow-large">

                <div className="text-center">
                    <Image
                        className="mx-auto"
                        src="/images/logo.svg"
                        alt="a royal blue rectangle with 3 white points that make a shape of a face that smile"
                        width={145}
                        height={30}
                        priority
                    />
                </div>

                <div className="card flow p-600">

                    <header className="flow">
                        <h1 className="text-preset-1">Welcome Back!!</h1>
                        <p className="text-preset-4">Log in to continue traking your mood and sleep</p>
                    </header>

                    <form action="" className="flow">

                        <div className="flow flow-tight">
                            <label htmlFor="email" className="text-bold">
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="email@example.com"
                                className="input-field"
                            />
                        </div>
                        <div className="flow flow-tight">
                            <label htmlFor="password" className="text-bold">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="input-field"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn mt-400"
                            data-variant="primary"
                        >
                            Log In
                        </button>

                    </form>

                    <p className="text-center text-preset-5">
                        Haven&apos;t got an account?
                        <Link className="text-underline" href="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
