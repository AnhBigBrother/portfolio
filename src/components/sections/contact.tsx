"use client";
import SectionHeading from "@/components/section-heading";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks";
import { sendMessage } from "@/actions/sendMessage";
import SubmitButton from "@/components/submit-button";
import toast from "react-hot-toast";
import { currentEmail } from "@/data";

export default function Contact() {
	const ref = useSectionInView("Contact");

	return (
		<motion.section
			id='contact'
			ref={ref}
			className='w-full max-w-[45rem] scroll-mt-28 px-3 sm:scroll-mt-36'
			initial={{ opacity: 0, scale: 0.5 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3 }}>
			<SectionHeading>Contact me</SectionHeading>
			<p className='mb-6 text-center dark:text-white/60'>
				Please contact me directly at{" "}
				<a
					className='text-sky-600 hover:underline'
					href={`mailto:${currentEmail}`}>
          {currentEmail}
				</a>{" "}
				or through form below
			</p>
			<form
				className='flex w-full flex-col items-center'
				action={async (formData: FormData) => {
					const { data, error } = await sendMessage(formData);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success("Email sent successfully!");
				}}>
				<input
					type='email'
					name='senderEmail'
					required
					maxLength={100}
					className='bg-secondary h-14 w-full rounded-lg px-4 outline-none placeholder:text-gray-500/80'
					placeholder='Your email address'
				/>
				<textarea
					name='message'
					required
					maxLength={5000}
					className='bg-secondary my-3 h-52 w-full resize-none rounded-lg p-4 outline-none placeholder:text-gray-500/80'
					placeholder='Your message'
				/>
				<SubmitButton />
			</form>
		</motion.section>
	);
}
