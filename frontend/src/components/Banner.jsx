import React from 'react'
// instead of using (props), we can use ({title, subtitle}), so that we can use title in place of props.title
// we can add defaults too, <h1>my app</h1>
// as a failsafe in case no props were passed
const Banner = ({title="Become a React Dev", subtitle="Find the react job that fits your skill set"}) => {
    return (
        <section className="bg-indigo-700 py-20 mb-4">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            >
                <div className="text-center">
                    <h1
                        className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
                    >
                        { title }
                    </h1>
                    <p className="my-4 text-xl text-white">
                        { subtitle }
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Banner