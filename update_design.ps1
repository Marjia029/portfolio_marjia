$d = "d:\LEARNING\Me\portfolio_marjia"

function Normalize($s) { $s -replace "`r`n", "`n" }

# ── 1. Extract CSS from portfolio/index.html into src/App.css ─────────────────
$html     = Normalize (Get-Content "$d\portfolio\index.html" -Raw -Encoding UTF8)
$styleStart = $html.IndexOf('<style>') + '<style>'.Length
$styleEnd   = $html.IndexOf('</style>')
$css = $html.Substring($styleStart, $styleEnd - $styleStart).Trim()
Set-Content "$d\src\App.css" $css -Encoding UTF8
Write-Host "  [1/6] App.css written ($($css.Length) chars)"

# ── 2. Convert portfolio/app.jsx → src/App.js ─────────────────────────────────
$app = Normalize (Get-Content "$d\portfolio\app.jsx" -Raw -Encoding UTF8)

# Remove 'use strict' + blank line
$app = $app -replace "^'use strict';\n\n", ""

# Remove CDN-style destructure
$app = $app -replace "const \{ useState, useEffect \} = React;\n\n", ""

# Prepend proper module imports
$importBlock  = "import React, { useState, useEffect } from 'react';" + "`n"
$importBlock += "import TweaksPanel from './components/TweaksPanel';" + "`n"
$importBlock += "import './App.css';" + "`n`n"
$app = $importBlock + $app

# Remove the ReactDOM mount call and its comment (last few lines)
$reactdomLine = "ReactDOM.createRoot(document.getElementById('root')).render(<App />);"
$idx = $app.IndexOf($reactdomLine)
if ($idx -gt 0) {
    $app = $app.Substring(0, $idx).TrimEnd()
    # Also strip the comment line above it
    $nl = $app.LastIndexOf("`n")
    $app = $app.Substring(0, $nl).TrimEnd()
}

# Add TweaksPanel inside App's return, just before </React.Fragment>
$app = $app -replace "      <Footer />\n    </React\.Fragment>",
                     "      <Footer />`n      <TweaksPanel />`n    </React.Fragment>"

# Export
$app = $app.TrimEnd() + "`n`nexport default App;`n"

Set-Content "$d\src\App.js" $app -Encoding UTF8
Write-Host "  [2/6] App.js written ($($app.Length) chars)"

# ── 3. Convert tweaks-panel.jsx → src/components/TweaksPanel.js ───────────────
$panel = Normalize (Get-Content "$d\portfolio\tweaks-panel.jsx" -Raw -Encoding UTF8)

# Remove 'use strict' + blank line
$panel = $panel -replace "^'use strict';\n\n", ""

# Remove CDN-style destructure
$panel = $panel -replace "const \{ useState \} = React;\n\n", ""

# Prepend import
$panel = "import React, { useState } from 'react';" + "`n`n" + $panel

# Remove the mount-into-own-container block at the bottom
$twkMount = "const _twkContainer = document.createElement('div');"
$idx2 = $panel.IndexOf($twkMount)
if ($idx2 -gt 0) {
    $panel = $panel.Substring(0, $idx2).TrimEnd()
    # Strip the comment line above it
    $nl2 = $panel.LastIndexOf("`n")
    $panel = $panel.Substring(0, $nl2).TrimEnd()
}

$panel = $panel.TrimEnd() + "`n`nexport default TweaksPanel;`n"

Set-Content "$d\src\components\TweaksPanel.js" $panel -Encoding UTF8
Write-Host "  [3/6] TweaksPanel.js written ($($panel.Length) chars)"

# ── 4. Clear src/index.css (new design has no global font overrides needed) ────
Set-Content "$d\src\index.css" "" -Encoding UTF8
Write-Host "  [4/6] index.css cleared"

# ── 5. Clear src/style.css ────────────────────────────────────────────────────
Set-Content "$d\src\style.css" "" -Encoding UTF8
Write-Host "  [5/6] style.css cleared"

# ── 6. Update public/index.html: add fonts + update title ────────────────────
$publicHtml = Normalize (Get-Content "$d\public\index.html" -Raw -Encoding UTF8)

$fontLinks  = "  <link rel=`"preconnect`" href=`"https://fonts.googleapis.com`" />`n"
$fontLinks += "  <link rel=`"preconnect`" href=`"https://fonts.gstatic.com`" crossorigin />`n"
$fontLinks += "  <link href=`"https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700&family=Caveat:wght@400;500;600&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Instrument+Serif:ital@0;1&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Sora:wght@300;400;500;600;700&display=swap`" rel=`"stylesheet`" />"

$newTitle   = "Marjia Afroj " + [char]0x2014 + " Software Engineer"
$publicHtml = $publicHtml -replace "  <title>Marjia\|\| Portfolio</title>",
                                    "$fontLinks`n  <title>$newTitle</title>"

Set-Content "$d\public\index.html" $publicHtml -Encoding UTF8
Write-Host "  [6/6] public/index.html updated"

Write-Host "`nDone! Design update complete."
