import Image from "next/image";

export default function Onboarding() {
    return (
        <div className="wrapper">
            <div className="grid login-screen flow flow-large">
                <div className="text-center">
                    <Image
                        className="mx-auto"
                        src="/images/logo.svg"
                        alt="a royal blue square with 3 withe lines that make it look like a funny face"
                        width={145}
                        height={30}
                        priority
                    />
                </div>
                <div className="card flow p-600">
                    <header className="flow">
                        <h1 className="text-preset-1">Personalize your experience</h1>
                        <p className="text-preset-4">
                            Add your name and a profile picture to make Mood yours.
                        </p>
                    </header>
                    <form className="flow"
                        action="">
                        <div className="flow flow-tight">
                            <label htmlFor="name" className="text-bold">Name</label>
                            <input id="name" type="text" placeholder="Enter your name" className="input-field" />
                        </div>
                        <div className="cluster">
                            <Image
                                src="/images/avatar-placeholder.svg"
                                alt="avatar placeholder"
                                width={56}
                                height={56}
                            />
                            <div className="flow flow-tight" style={{ flex: 1 }}>
                                <span className="text-bold display-block">Upload image</span>
                                <span className="text-preset-5"> Max 250kb, PNG or JPEG</span>
                            </div>
                            <button type="button" data-variant="secondary" className="btn">Upload</button>
                        </div>
                        <button className="btn mt-400" type="submit" data-variant="primary">Start Tracking</button>
                    </form>
                </div>
            </div>
        </div>
    )
}