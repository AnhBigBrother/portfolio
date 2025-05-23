"use client";
import SectionHeading from "@/components/section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "@/components/vertical-timeline";
import { experienceData } from "@/data";
import { useSectionInView } from "@/hooks";
import React from "react";

export default function Experience() {
	const ref = useSectionInView("Experience");
	return (
		<section
			id='experience'
			ref={ref}
			className='w-full scroll-mt-28 sm:w-auto sm:max-w-[54rem] sm:scroll-mt-36'>
			<SectionHeading>Experience</SectionHeading>
			<VerticalTimeline>
				{experienceData.map((item, idx) => (
					<VerticalTimelineElement
						key={idx}
						position={idx % 2 === 0 ? "left" : "right"}
						icon={item.icon}
						date={item.date}>
						<h3 className='font-semibold capitalize'>{item.title}</h3>
						<p className='mt-0 font-normal'>
							{item.location} <span className='sm:hidden'>({item.date})</span>
						</p>
						<p className='mt-1 font-normal text-gray-600 dark:text-white/60'>
							{item.description}
						</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</section>
	);
}
