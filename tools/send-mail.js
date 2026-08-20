import { Resend } from "resend";
import { CONSTANTS } from "../constants.js";

const resend = new Resend(CONSTANTS.RESEND_API_KEY);

export async function sendMail(to, subject, body) {
    try {
        const { data, error } = await resend.emails.send({
            from: '',
            to: [...to],
            subject: subject,
            html: body,
        });
        if (error) {
            throw new Error(`Error sending email: ${error.message}`);
        }
        console.log("Email sent successfully:", data);
        return "Email sent successfully";

    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }

}