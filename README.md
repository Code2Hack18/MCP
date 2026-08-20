# MCP Email Server

A simple **Model Context Protocol (MCP) server** that allows AI clients such as Cursor to send emails using the Resend email service.

## Features

* Send emails to one or multiple recipients
* Supports subject and HTML body
* Uses environment variables for secure configuration
* Works with Cursor and other MCP-compatible clients

## Requirements

* Node.js 20+
* Resend account
* Resend API key
* Verified sender/domain in Resend
* Cursor or another MCP-compatible MCP client

## Setup

1. Install the project dependencies.
2. Create a `.env` file in the project root.
3. Add your Resend API key and verified sender email.
4. Start the MCP server.
5. Add the server to your MCP client's configuration.

### Environment Variables

```text
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=your_verified_sender
```

Never commit `.env` to Git.

## Cursor MCP Configuration

Use absolute paths for both the `.env` file and the MCP entry file.

```json
{
  "mcpServers": {
    "email-server": {
      "command": "node",
      "args": [
        "--env-file=/ABSOLUTE/PATH/TO/.env",
        "/ABSOLUTE/PATH/TO/app.js"
      ]
    }
  }
}
```

Replace the paths with the locations on your own machine.

## Available Tool

### `send-mail`

Sends an email to one or more recipients.

**Parameters:**

* `to` — Recipient email address(es)
* `subject` — Email subject
* `body` — Email body

## Security

* Keep API keys in `.env`.
* Never commit `.env` to Git.
* Use a verified sender/domain with Resend.
* Do not expose API keys in MCP configuration.

## Tech Stack

* Node.js
* MCP
* Resend
* Zod
* Cursor

## License

MIT
