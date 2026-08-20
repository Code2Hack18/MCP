import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
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

        inputSchema: {
            to: z.string().array().describe("Recipient email addresses"),
            subject: z.string().describe("Subject of the email"),
            body: z.string().describe("Body of the email"),
        },

        outputSchema: z.object({
            success: z.boolean(),
            message: z.string(),
        }),
    },

    async ({ to, subject, body }) => {
        const result = await sendMail(to, subject, body);

        return {
            content: [
                {
                    type: "text",
                    text: result,
                },
            ],
        };
    }
);