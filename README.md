# claude-session-handoff

A Claude Code skill that captures your session context into a structured handoff document — so the next session picks up exactly where you left off.

## What it does

Run `/session-handoff` at the end of any Claude Code session. It will:
- Summarize what was worked on, decisions made, and files changed
- Record the current state of the project (builds? tests pass? deployed?)
- List blockers and next steps
- Write a `handoffs/YYYY-MM-DD.md` file in your project root

No more losing context between sessions.

## Installation

```bash
git clone https://github.com/samarthpatel24/claude-session-handoff.git ~/.claude/skills/session-handoff
```

Or just copy the skill file:

```bash
mkdir -p ~/.claude/skills/session-handoff
curl -o ~/.claude/skills/session-handoff/SKILL.md \
  https://raw.githubusercontent.com/samarthpatel24/claude-session-handoff/main/session-handoff/SKILL.md
```

## Usage

In any Claude Code session, type:

```
/session-handoff
```

Claude will gather context from the session, write a structured handoff doc to `./handoffs/YYYY-MM-DD.md`, and print it to the terminal.

## Example Output

See [examples/sample-handoff.md](examples/sample-handoff.md) for a realistic example of what a handoff document looks like.

## Works with

- **[claude-historian](https://github.com/badass-courses/claude-historian)** (optional) — if installed, enriches the handoff with deeper session history search
- **[nightly-digest](https://github.com/samarthpatel24/nightly-digest)** (optional) — if you use nightly-digest, session-handoff will offer to copy summaries to `~/.claude/daily-summaries/` for automatic progress report generation

## Requirements

- [Claude Code](https://claude.ai/code) CLI installed
- No other dependencies

## License

MIT
