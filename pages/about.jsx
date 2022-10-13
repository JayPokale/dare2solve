import AboutComponent from "../components/AboutComponent";

export default function Home() {
	return (
		<div>
			<div className="relative flex h-40 w-full bg-gray-100 justify-center items-center">
        <h1 className="absolute top-1/3 font-bold lg:text-2xl text-xl">About Us</h1>
      </div>
			<div className="flex lg:flex-row flex-col lg:h-screen my-8">
				<div className="flex flex-col items-center md:w-3/4 md:pl-16 lg:w-1/2 w-full md:mx-auto mx-4 my-auto">
					<h1 className="lg:text-3xl sm:text-xl font-bold text-pink-600 z-10">About my Work</h1>
					<p className="sm:pt-4 lg:text-2xl sm:text-lg text-base text-justify">I upload daily new Math puzzle on Instagram, Facebook, Twitter at 04:00 UTC and its solution on <a href="dare2solve.com">dare2solve.com</a> at 06:30 UTC. </p>
					<p className="sm:pt-4 lg:text-2xl sm:text-lg text-base text-justify">There are more than one solution for almost all question but you will get one of the easiest possible solution for any question on dare2solve.com. Mostly you will get an geometric solution solution.</p>
				</div>
				<div className="flex flex-col md:w-3/4 md:pl-16 lg:w-1/2 w-full md:mx-auto mx-4 my-auto">
					<h1 className="lg:text-3xl sm:text-xl font-bold text-pink-600 z-10 lg:mt-0 mt-10">Devices I use while making questions:</h1>
					<h6 className="sm:pt-4 lg:text-2xl sm:text-lg text-base">1. ASUS TUF Gaming A15:<br/>(Ryzen 7 4800h GTX1660ti 16GB RAM/256GB SSD/1TB HDD)</h6>
					<h6 className="sm:pt-4 lg:text-2xl sm:text-lg text-base">2. CASE U Graphic Tablet (8.3 x 5.5 inches)</h6>
					<h1 className="lg:text-3xl sm:text-xl font-bold text-pink-600 z-10 mt-10">Softwares I use for making questions:</h1>
					<h6 className="sm:pt-4 lg:text-2xl sm:text-lg text-base">1. Geogebra</h6>
					<h6 className="sm:pt-4 lg:text-2xl sm:text-lg text-base">2. MS Word</h6>
					<h6 className="sm:pt-4 lg:text-2xl sm:text-lg text-base">3. MS Paint</h6>
					<h6 className="sm:pt-4 lg:text-2xl sm:text-lg text-base">4. Adobe Premiere Pro</h6>
				</div>
			</div>
			<AboutComponent />
		</div>
	);
}
