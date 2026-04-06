# claude-session-handoff

A Claude Code skill that captures your session into a structured document — useful for carrying context between sessions, sharing progress with your team, or keeping a personal development log.

## What it does

Run `/session-handoff` at the end of any Claude Code session. It will:
- Summarize what was worked on, decisions made, and files changed
- Record the current state of the project (builds? tests pass? deployed?)
- List blockers and next steps
- Write a `handoffs/YYYY-MM-DD.md` file in your project root

## Use cases

**Session continuity** — Resume exactly where you left off. No more re-explaining context to Claude at the start of a new session.

**End-of-day reports** — Share a clean, structured summary of what you shipped with your manager, team lead, or client. The output is human-readable and requires no editing.

**Progress tracking** — Build up a running log of `handoffs/` files over time. Flip back through them to see how a feature evolved, audit decisions, or write a retrospective.

**Async team handoffs** — Passing work to a colleague? The handoff doc covers state, blockers, and next steps so they can pick up without a sync call.

## Installation

**Via npm (recommended):**

```bash
# one-time setup — tells npm where to find @samarthpatel24 packages
echo "@samarthpatel24:registry=https://npm.pkg.github.com" >> ~/.npmrc

npm install -g @samarthpatel24/claude-skill-session-handoff
```

**Via npx (no install needed):**

```bash
npx @samarthpatel24/claude-skill-session-handoff --registry=https://npm.pkg.github.com
```

**Via git:**

```bash
git clone https://github.com/samarthpatel24/claude-session-handoff.git ~/.claude/skills/session-handoff
```

All methods copy the skill to `~/.claude/skills/session-handoff/`.

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
