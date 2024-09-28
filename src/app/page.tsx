import Skills from "@/components/sections/skills";
import About from "@/components/sections/about";
import Intro from "@/components/sections/intro";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

export default function Home() {
	return (
		<main className='mb-[10rem] flex flex-col items-center gap-[10rem] sm:gap-[18rem]'>
			<Intro />
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Contact />
		</main>
	);
}
