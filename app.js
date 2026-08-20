import { server } from "./server.js";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("MCP Server running...");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
