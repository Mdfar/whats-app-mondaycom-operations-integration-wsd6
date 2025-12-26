WhatsApp to Monday.com Ops-Bridge

This repository contains the logic schemas and API documentation for the Stage 1 operational integration.

Logic Flow

Trigger: WhatsApp Business Webhook (Media/Text).

AI Layer: OpenAI Whisper processes .ogg voice files into text.

Filtering: Custom JS logic removes 'social noise' and keeps operational data.

Action: Monday.com API creates a new pulse in the 'Operations' board.

Setup

Configure Make.com with your WhatsApp System User Token.

Connect your OpenAI API Key.

Map the Column IDs from your specific Monday.com board in the final module.