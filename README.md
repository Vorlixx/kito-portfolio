# Kito — Portfolio

Personal portfolio of **Elay Mammadli ("Kito")** — a cybersecurity student focused on
offensive security, penetration testing and reconnaissance tooling.

A dependency-free static website: hand-written HTML, CSS and vanilla JavaScript, with a
WebGL (Three.js) hero scene. Styles, scripts and images are split into `assets/` so the
markup stays readable and every file opens directly on GitHub.

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
| 04 | Specialities | Media, full-stack and offensive-security disciplines |
| 05 | Loadout | Languages, offensive-security stack and tools |
| 06 | Contact | GitHub, email and Discord |

---

## Project structure

```
.
├── index.html          # markup only (~21 KB)
├── assets/
│   ├── style.css       # all styles
│   ├── app.js          # animation, Three.js hero and interactions
│   └── img/            # extracted images
│       ├── logo.png
│       ├── hero.png
│       ├── texture.jpg
│       └── frame-01.jpg … frame-80.jpg   # hero animation frames
├── .gitattributes
├── .nojekyll
└── README.md
```

Styles, scripts and images were pulled out of the original single-file `index.html`
(which had grown past 20 MB because images were inlined as base64 data URIs). Each asset
now lives in its own file so it renders in the GitHub web viewer.

---

## Featured projects

| Project | Description | Stack |
|---------|-------------|-------|
| [KitoAi](https://github.com/Vorlixx/KitoIP) | AI-powered penetration-testing assistant. An LLM-driven *plan → execute → report* loop. | Python, LLM APIs |
| [Subdomain Recon](https://github.com/Vorlixx/subdomain-recon-tool) | Attack-surface reconnaissance toolkit: crt.sh passive discovery plus live-host probing. | Python |
| [VulnScanner](https://github.com/Vorlixx/vuln_scanner) | Automated web vulnerability scanner: HTTP security headers, TLS and exposed paths. | Python |
| [CyberDelve](https://github.com/Vorlixx/CyberDelveNews) | Keyless cyber-threat news aggregator: 41 feeds, CVE/KEV/ransomware tracking. | Python |

### More builds

| Project | Description | Stack |
|---------|-------------|-------|
| [Agent Ops](https://github.com/Vorlixx/ai-agent-orchestration) | Dashboard MVP for fleets of LLM agents: encrypted API access and orchestration. | Python, JS |
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
- **Animation:** GSAP + a WebGL (Three.js) hero scene
- **Assets:** images pre-extracted to `assets/img/` (no inline data URIs)
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

1. Open the repository → **Settings** → **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **`main`** and folder **`/ (root)`**, then save.
4. The site becomes available at `https://vorlixx.github.io/kito-portfolio/`.

The `.nojekyll` file is included so `assets/` is served as-is.

---

## Contact

- GitHub — [@Vorlixx](https://github.com/Vorlixx)
- Email — kito.00283@gmail.com
- Discord — `vorlixx_083`

---

_Built by Elay Mammadli · Azerbaijan_
