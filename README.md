# BeepResearch

Configuration rules for AI assistants using the Beeper MCP to interact with messaging apps (WhatsApp, iMessage, Signal, etc.).

## Files

- `claude.md` - Main instruction set for AI assistants
- `backfill.js` - Utility script for Beeper room operations. Use this to load in message histories into memory. Beeper does not automatically fetch old conversations, so this is a workaround.
- `.cursor/rules/` - Cursor IDE configuration

## Key Rules

- **Use Beeper MCP** for all messaging queries
- **Prioritize recent messages** when retrieving chat history
- **Handle images properly** - copy Beeper image files to ~/Downloads with .jpg extensions and create clickable links
- **Include timestamps and context** when summarizing conversations
- **Focus on last 24 hours** for chat summaries unless specified otherwise

## Usage

The rules in `claude.md` are automatically applied when using Cursor IDE. For other environments, reference the instructions directly.
