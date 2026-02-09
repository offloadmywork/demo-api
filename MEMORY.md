# MEMORY.md

Project status and decisions are tracked here by the AI assistant.

## Project Overview
- REST API for Tasks/Todos
- Built with Express + TypeScript
- Current state: MVP with basic CRUD operations

## Recent Activity
- 2026-02-09: Heartbeat check performed, repository reviewed, 5 open issues and 1 open PR identified
  - Issues span API improvements, OpenClaw App features, and Email Worker security
  - PR #9 adds request logging middleware to improve API observability
  - All tests passing, no critical bugs reported
- 2026-02-08: Heartbeat check performed, repository reviewed and improved
  - Implemented missing DELETE /tasks/:id endpoint
  - Added input validation for POST /tasks endpoint
  - Updated memory with findings
- 2026-02-07: Previous heartbeat check, repository reviewed, multiple issues identified

## Notable Issues
- #30: Test: Bot response to new issue (recently opened)
- #29: OpenClaw webhook test: issue from subagent
- #28: OpenClaw App: Run 1-week dogfood plan
- #24: OpenClaw App: Install & verify webhook delivery
- #23: Email Worker: Quarantine system for suspicious emails
- #9: Add request logging middleware (open PR)

## Tech Stack
- Express.js for REST API
- TypeScript for type safety
- Standard npm scripts for development

## Server Configuration
- Port: 3000
- Basic CRUD operations implemented
- Missing: PUT endpoints (DELETE recently implemented)
- Logging middleware: PR #9 in progress
