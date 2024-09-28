"use client";
import SectionHeading from "@/components/section-heading";
import React from "react";
import Project from "@/components/project";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
	const ref = useSectionInView("Projects", 0.5);

	return (
		<section
			ref={ref}
			id='projects'
			className='scroll-mt-28 px-3 sm:scroll-mt-36 sm:px-0'>
			<SectionHeading>Projects</SectionHeading>
			<div>
				{projectsData.map((project, idx) => (
					<React.Fragment key={idx}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
