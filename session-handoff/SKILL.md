---
name: session-handoff
description: Capture current session context into a structured handoff document for seamless session continuity. Use at end of session or when switching contexts.
---

# Session Handoff

Capture what was done this session into a structured handoff doc so the next session picks up exactly where this one left off.

## When to Use
- End of a work session
- Switching to a different project or context
- Before a long break
- When context window is getting full and you need to continue in a new session

## Instructions

1. **Gather context** from the current session:
   - If `claude-historian` is installed: run `search(scope: "sessions", timeframe: "today")` and `search(scope: "files", timeframe: "today")`
   - If not installed: summarize from the current conversation context directly
   - Run `git status`, `git branch --show-current`, and `git log --oneline -5` to enrich with branch/commit info

2. **Organize into the output format** below — be specific, use real file names and decisions from this session

3. **Write the file**:
   - Path: `./handoffs/YYYY-MM-DD.md` relative to project root
   - If the file already exists (multiple sessions in a day): append after a `---` separator with a timestamp header
   - Also print the handoff to the terminal immediately

4. **Offer nightly-digest integration**:
   - If `~/.claude/daily-summaries/` exists, ask whether to copy there too

## Output Format

```markdown
# Session Handoff — [Date]

**Project:** [repo/folder name]
**Branch:** `[current branch]`
**Summary:** [one-line description of what was done]

## Work Completed
- [specific bullet points with file names and what changed]

## Key Decisions
- **[Decision]**: [why it was made]

## Files Changed
- `[path/to/file]` — [what changed and why]

## Current State
[Does it build? Tests pass? Deployed? Any known broken state?]

## Blockers / Open Questions
- [anything unresolved]

## Next Steps
1. [most important thing to do next]
2. [second priority]

## Context for Next Session
[Non-obvious context: env setup, branch state, pending PRs, quirks to be aware of]
```

## Notes
- Works without `claude-historian` — falls back to current conversation memory
- Git context enriches the handoff significantly — always run git commands
- Be specific: "updated auth middleware" is less useful than "added JWT expiry check in `src/middleware/auth.py:L45`"
