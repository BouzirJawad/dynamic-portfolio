import chillGuy from '../assets/95c.png'

function Home() {
    
    return(
        <section className="w-[90%] sm:w-[75%] md:w-[55%] mx-auto rounded-xl mainDiv">
            <div className="w-full flex flex-wrap justify-center items-center p-3">
                <div className="w-1/3 md:w-1/2 sm:max-w-sm">
                    <img src={chillGuy} alt="chill guy" />
                </div>
                <div className="w-2/3 sm:w-1/2 mt-3 lg:space-y-5 xl:space-y-7">
                    <p className="text-2xl font-bold">Hello,</p>
                    <p className="text-xl font-bold">I'm Bouzir Jawad</p>
                    <p className="text-lg">full stack developer / freelancer</p>
                    <button className="primary-btn mb-2 inline-block">Get in touch</button>
                </div>
            </div>
        </section>
    );
}

export default Home