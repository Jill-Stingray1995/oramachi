# CP353W11 Web regional illustration fix

Runtime upload targets:
- index.html
- style.css
- app.js
- app-version.js
- service-worker.js
- regional-illustrations-manifest.json
- regional-illustrations/ (22 new ASCII-named PNGs)

Fixes:
1. Result regional illustration max display width changed from 520px to 700px (responsive below 700px).
2. index.html now requests app.js/style.css with cp353w11-web700 cache-busting URLs.
3. All 123 regional illustration URLs in app.js carry cp353w11-web700 query version.
4. Service Worker cache version bumped to cp353w11-web700.
5. New 22 images keep their original high-resolution pixels; no downsampling/recompression performed.
6. Joetsu route is 新潟県|上越市 -> asset 104 -> regional-joetsu.png.

Do not mark Web verification complete until the deployed site is checked in-browser.
