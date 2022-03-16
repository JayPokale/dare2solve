import HeroSection from "../components/HeroSection";
import LatestPosts from "../components/LatestPosts";
import AboutComponent from "../components/AboutComponent";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<LatestPosts />
			<AboutComponent />
		</div>
	);
}
