import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type='submit'
			disabled={pending}
			className='shadow-custom flex w-[8.5rem] items-center justify-center gap-2 rounded-full bg-black/80 py-3 text-white outline-none duration-200 hover:scale-110 disabled:scale-100 disabled:bg-opacity-65'>
			{pending ? (
				<div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
			) : (
				<>
					<span>Send</span>
					<FaPaperPlane className='text-xs' />
				</>
			)}
		</button>
	);
}
