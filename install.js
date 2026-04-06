#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const src = path.join(__dirname, 'session-handoff');
const dest = path.join(os.homedir(), '.claude', 'skills', 'session-handoff');

try {
  fs.mkdirSync(dest, { recursive: true });

  for (const file of fs.readdirSync(src)) {
    fs.copyFileSync(path.join(src, file), path.join(dest, file));
  }

  console.log(`✓ session-handoff skill installed to ${dest}`);
  console.log('  Use /session-handoff in any Claude Code session.');
} catch (err) {
  console.error('Failed to install session-handoff skill:', err.message);
  process.exit(1);
}
