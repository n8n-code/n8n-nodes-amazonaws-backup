# @n8n-dev/n8n-nodes-amazonaws-backup

![amazonaws-backup Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-amazonaws-backup.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-amazonaws-backup)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing amazonaws-backup API integrations by hand.**

Every time you connect n8n to amazonaws-backup, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to amazonaws-backup took 5 minutes, not half a day?**

This node gives you **1+ resources** out of the box: **Default**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-amazonaws-backup
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-amazonaws-backup`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **amazonaws-backup API** → paste your API key
3. Drag the **amazonaws-backup** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Default</b> (72 operations)</summary>

- Delete Cancel Legal Hold
- Put Create Backup Plan
- Get List Backup Plans
- Put Create Backup Selection
- Get List Backup Selections
- Put Create Backup Vault
- Delete Backup Vault
- Get Describe Backup Vault
- Post Create Framework
- Get List Frameworks
- Post Create Legal Hold
- Get List Legal Holds
- Post Create Report Plan
- Get List Report Plans
- Delete Backup Plan
- Post Update Backup Plan
- Delete Backup Selection
- Get Backup Selection
- Delete Backup Vault Access Policy
- Get Backup Vault Access Policy
- Put Backup Vault Access Policy
- Delete Backup Vault Lock Configuration
- Put Backup Vault Lock Configuration
- Delete Backup Vault Notifications
- Get Backup Vault Notifications
- Put Backup Vault Notifications
- Delete Framework
- Get Describe Framework
- Put Update Framework
- Delete Recovery Point
- Get Describe Recovery Point
- Post Update Recovery Point Lifecycle
- Delete Report Plan
- Get Describe Report Plan
- Put Update Report Plan
- Get Describe Backup Job
- Post Stop Backup Job
- Get Describe Copy Job
- Get Describe Global Settings
- Put Update Global Settings
- Get Describe Protected Resource
- Get Describe Region Settings
- Put Update Region Settings
- Get Describe Report Job
- Get Describe Restore Job
- Post Disassociate Recovery Point
- Delete Disassociate Recovery Point From Parent
- Get Export Backup Plan Template
- Get Backup Plan
- Post Get Backup Plan From JSON
- Get Backup Plan From Template
- Get Legal Hold
- Get Recovery Point Restore Metadata
- Get Supported Resource Types
- Get List Backup Jobs
- Get List Backup Plan Templates
- Get List Backup Plan Versions
- Get List Backup Vaults
- Get List Copy Jobs
- Get List Protected Resources
- Get List Recovery Points By Backup Vault
- Get List Recovery Points By Legal Hold
- Get List Recovery Points By Resource
- Get List Report Jobs
- Get List Restore Jobs
- Get List Tags
- Put Start Backup Job
- Put Start Copy Job
- Post Start Report Job
- Put Start Restore Job
- Post Tag Resource
- Post Untag Resource

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from amazonaws-backup docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official amazonaws-backup OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **amazonaws-backup** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the amazonaws-backup API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
