"use server";

import { Resend } from "resend";
import { currentEmail } from "@/data";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMessage = async (formData: FormData) => {
	try {
		const senderEmail = formData.get("senderEmail");
		const message = formData.get("message");

		if (!senderEmail || typeof senderEmail !== "string" || senderEmail.length > 100) {
			return { error: "Invalid email" };
		}
		if (!message || typeof message !== "string" || message.length > 5000) {
			return { error: "Invalid message" };
		}

		const data = await resend.emails.send({
			from: `Portfolio contact <onboarding@resend.dev>`,
			to: currentEmail,
			subject: `message from: ${senderEmail}`,
			reply_to: senderEmail,
			text: message,
		});
		return { data };
	} catch (error) {
		let message: string;

		if (error instanceof Error) {
			message = error.message;
		} else if (error && typeof error === "object" && "message" in error) {
			message = String(error.message);
		} else if (typeof error === "string") {
			message = error;
		} else {
			message = "Something went wrong";
		}

		return { error: message };
	}
};

export { sendMessage };
