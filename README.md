# Kito — Portfolio

Personal portfolio of **Elay Mammadli (“Kito”)** — a cybersecurity student focused on
offensive security, reconnaissance tooling and DevSecOps.

This is a single-file, dependency-free website: everything (styles, animation and the
3D hero) lives inside `index.html`, so it can be hosted anywhere as a static page.

**Live:** _enable GitHub Pages to publish it (see [Deployment](#deployment))._

---

## Contents

The page is split into six sections:

| # | Section | What it shows |
|---|---------|---------------|
| — | Hero | Identity, intro line and animated terminal |
| 01 | Projects | Featured security tooling |
| 02 | Tooling | Smaller utilities and infrastructure projects |
| 03 | CTF | Challenge write-ups |
| 04 | Specialities | Media, full-stack and security disciplines |
| 05 | Loadout | Languages, offensive-security stack and tools |
| 06 | Contact | GitHub, email and Discord |

---

## Featured projects

| Project | Description | Stack |
|---------|-------------|-------|
| [KitoAi](https://github.com/Vorlixx/KitoIP) | AI-powered penetration-testing assistant. An LLM-driven *plan → execute → analyze* agent that orchestrates `nmap`, `subfinder`, `nuclei`, `katana`, `ffuf`, `sqlmap` and `nikto`, parses bug-bounty scopes, scores findings with CVSS v3.1 and produces HackerOne-style reports. | Python, FastAPI |
| [Subdomain Recon](https://github.com/Vorlixx/subdomain-recon-tool) | Attack-surface reconnaissance toolkit: crt.sh passive enumeration + DNS brute-force, live-host probing, TCP port scanning, fingerprinting, banner grabbing and JSON/HTML reports. | Python, asyncio |
| [VulnScanner](https://github.com/Vorlixx/vuln_scanner) | Automated web vulnerability scanner: HTTP security headers, TCP port scanning, OWASP-style web checks, risk scoring and PDF/TXT reporting. | Python, fpdf2 |
| [CyberDelve](https://github.com/Vorlixx/CyberDelveNews) | Keyless cyber-threat news aggregator: 41 feeds, CVE/KEV/ransomware tracking, Telegram bot, Discord/Slack webhooks and a local dashboard. | Python |

### More builds

| Project | Description | Stack |
|---------|-------------|-------|
| [Agent Ops](https://github.com/Vorlixx/ai-agent-orchestration) | Dashboard MVP for fleets of LLM agents: encrypted API-key registration, real-time usage/cost ingestion and error-rate alerting. | Node.js, Next.js 15, PostgreSQL |
| [Profile](https://github.com/Vorlixx/Vorlixx) | GitHub profile with an animated banner and live stats. | Markdown, SVG |

---

## CTF & write-ups

| Challenge | Category | Write-up |
|-----------|----------|----------|
| Hack The Box — **Chaogen** (Medium) | Coding / Cellular Automata | [HTB-Chaogen-Writeup](https://github.com/Vorlixx/HTB-Chaogen-Writeup) |

The write-up covers reverse-engineering the custom cellular-automaton rule semantics,
resolving ambiguity with a combinatorial brute-force against the leaked API test cases,
and implementing a deterministic multi-generation grid simulator.

---

## Tech

- **Markup / styles:** hand-written HTML + CSS (no frameworks, no build step)
- **Animation:** GSAP + a WebGL (Three.js) hero scene, both embedded inline
- **Fonts:** loaded from Google Fonts

---

## Running locally

No build step is required — just open the file:

```bash
git clone https://github.com/Vorlixx/kito-portfolio.git
cd kito-portfolio
# open index.html in your browser
```

Or serve it locally:

```bash
python -m http.server 8080
# then visit http://localhost:8080
```

---

## Deployment

The site is designed for **GitHub Pages**:

1. Open the repository → **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **`main`** and folder **`/ (root)`**, then save.
4. The site becomes available at `https://vorlixx.github.io/kito-portfolio/`.

The `.nojekyll` file is included so the assets are served as-is.

---

## Contact

- GitHub — [@Vorlixx](https://github.com/Vorlixx)
- Email — kito.00283@gmail.com
- Discord — `vorlixx_083`

---

_Built by Elay Mammadli · Azerbaijan_
