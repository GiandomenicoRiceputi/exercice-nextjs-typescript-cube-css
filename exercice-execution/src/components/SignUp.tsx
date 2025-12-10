import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
    return (
        <div className="wrapper">
            <div className="grid login-screen flow flow-large">
                <div className="text-center">
                    <Image
                        className="mx-auto"
                        src="/images/logo.svg"
                        alt="Mood tracker logo"
                        width={145}
                        height={30}
                        priority
                    />
                </div>
                <div className="card flow p-600">

                    <header className="flow">
                        <h1 className="text-preset-1">Create an account</h1>
                        <p className="text-preset-4">
                            Join to track your daily mood and sleep with ease.
                        </p>
                    </header>
                    <form action="" className="flow">
                        <div className="flow flow-tight">
                            <label htmlFor="email" className="text-bold">Email address</label>
                            <input type="email" id="email" placeholder="email@address.com" className="input-field" />
                        </div>
                        <div className="flow flow-tight">
                            <label htmlFor="password" className="text-bold">Password</label>
                            <input type="password" id="password" className="input-field" />
                        </div>
                        <button type="submit" data-variant="primary" className="btn mt-400">Sign Up</button>
                    </form>
                    <p className="text-center text-preset-5">
                        Already got an account? <Link className="text-underline" href="/">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}