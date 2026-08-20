import {McpServer} from "@modelcontextprotocol/server"
import { sendMail } from "./tools/send-mail.js";
import { z } from "zod";

export const server = new McpServer({
    name: "MCP-server",
    version: "1.0.0",
});

server.registerTool(
    "send-mail",
    {
        description: "Send an email",

        inputSchema: z.object({
            to: z.array(z.string()).describe("Recipient email addresses"),
            subject: z.string().describe("Subject of the email"),
            body: z.string().describe("Body of the email"),
        }),

        outputSchema: z.object({
            success: z.boolean(),
            message: z.string(),
        }),
    },

    async ({ to, subject, body }) => {
        try {
            const result = await sendMail(to, subject, body);

            return {
                content: [
                    {
                        type: "text",
                        text: result.message,
                    },
                ],

                structuredContent: result,
            };
        } catch (error) {
            return {
                content: [
                    {
                        type: "text",
                        text: `Failed to send email: ${
                            error instanceof Error
                                ? error.message
                                : String(error)
                        }`,
                    },
                ],
                isError: true,
            };
        }
    }
);