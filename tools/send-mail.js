import { Resend } from "resend";
import { CONSTANTS } from "../constants.js";

const resend = new Resend(CONSTANTS.RESEND_API_KEY);

export async function sendMail(to, subject, body) {
    const { data, error } = await resend.emails.send({
        from: CONSTANTS.RESEND_FROM_EMAIL,
        to,
        subject,
        html: body,
    });

    if (error) {
        throw new Error(`Error sending email: ${error.message}`);
    }
    console.log("Email sent successfully:", data);
    return {
        success: true,
        message: "Email sent successfully",
    };
}