# Fundamental SI Unit Converter

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-blue)](https://coder-vinay-arc.github.io/Fundamental-unit-converter/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A small, web-based unit converter that supports conversions for all seven SI base quantities (length, mass, time, electric current, thermodynamic temperature, amount of substance, luminous intensity). Built with plain HTML, CSS and JavaScript for easy use and contribution.

Live demo: https://coder-vinay-arc.github.io/Fundamental-unit-converter/

---

## Screenshot
Add a screenshot at `assets/screenshot.png` and uncomment the image below to show it here.

<!--
![App screenshot](assets/screenshot.png)
-->

---

## Features
- Converts between units for all 7 SI base quantities
- Real-time conversion as you type
- Clean, responsive UI (mobile-friendly)
- Dynamic unit switching and clear labels
- Lightweight: no dependencies or build step required

---

## Supported base quantities & example units
- Length: meter (m), kilometer (km), centimeter (cm), millimeter (mm), mile (mi), inch (in)
- Mass: kilogram (kg), gram (g), milligram (mg), tonne (t), pound (lb), ounce (oz)
- Time: second (s), minute (min), hour (h)
- Electric current: ampere (A)
- Temperature: kelvin (K), celsius (°C), fahrenheit (°F)
- Amount of substance: mole (mol)
- Luminous intensity: candela (cd)

(If you want a full table for every supported unit and conversion factor, I can add it here.)

---

## Quick start (open locally)
No build tools required — just open the app in a browser.

1. Clone the repo:
   git clone https://github.com/Coder-Vinay-Arc/Fundamental-unit-converter.git
2. Open `index.html` in your browser:
   - Double-click `index.html` or
   - Serve it with a simple HTTP server, e.g.:
     npx http-server . -p 8080
     (then visit http://localhost:8080)

---

## Usage
- Select the quantity (Length, Mass, etc.)
- Pick the input and output units
- Type a number into the input field — the converted result updates automatically

Example:
- Quantity: Length
- From: meter
- To: kilometer
- Input: `1500`
- Output: `1.5 km`

---

## Development
- The project uses plain HTML/CSS/JS. Files of interest:
  - `index.html` — app entry
  - `styles.css` — styling
  - `app.js` (or whatever your main script is) — conversion logic
- Recommended workflow:
  1. Create a feature branch: `git checkout -b feat/add-unit-temperature`
  2. Make changes and run locally
  3. Commit and open a PR

If you'd like, I can add a simple npm dev server and a watch script.

---

## Contributing
Thanks for considering contributing! Some ideas:
- Add more units and conversion factors
- Add unit search/filter
- Improve accessibility (ARIA labels, keyboard navigation)
- Add automated tests for conversion functions

Please open issues or PRs. If you'd like a contributing guide, I can add one.

---

## Tests
There are no automated tests yet. I recommend adding a small test suite for the conversion logic (Jest or plain Mocha + Chai) to prevent regression when adding new units.

---

## License
This project doesn't currently include a license file. I recommend adding an open-source license (MIT is a common choice). Example: add a `LICENSE` file and link it in the header.

---

## Author
Coder-Vinay-Arc — https://github.com/Coder-Vinay-Arc

---

## Acknowledgements
- Built with ❤️ using plain web technologies.
- Inspired by simple, dependency-free utilities.
