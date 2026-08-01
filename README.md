# Durmisi&Clean — Website

Static bilingual (DE/EN) website. Plain HTML, CSS and JavaScript — no build step, no
dependencies, no backend. Open `index.html` in a browser and it works.

```
index.html          Home
leistungen.html     The six services in detail
ueber-uns.html      About
kontakt.html        Contact + quote form
impressum.html      Impressum & Datenschutz
css/style.css       All styling
js/i18n.js          German/English text + contact details
js/main.js          Navigation, animations, accordion, form
assets/img/         Photography
```

## Running it locally

```bash
python3 -m http.server 5173
```

Then open <http://localhost:5173>.

---

## ⚠️ Replace before going live

I had no real data for these, so they are placeholders or examples. **Each one needs your
input before the site is published.**

### 1. Contact details — the only file you need to touch

All of it lives in one object at the top of **`js/i18n.js`**. Change it there once and every
page updates — header, footer, contact page, Impressum, the mobile call bar, and the form's
recipient address.

```js
const CONTACT = {
  phone:        '079 123 45 67',
  phoneHref:    'tel:+41791234567',
  email:        'info@durmisi-clean.ch',
  emailHref:    'mailto:info@durmisi-clean.ch',
  whatsapp:     '079 123 45 67',
  whatsappHref: 'https://wa.me/41791234567',   // digits only, no + or spaces
  street:       'Musterstrasse 12',
  city:         '8000 Zürich',
  instagram:    'https://instagram.com/durmisiclean',
  uid:          'CHE-123.456.789',
  register:     'Handelsregister des Kantons Zürich',
  owner:        'Vorname Nachname'
};
```

### 2. The numbers on the home page — currently invented

The four figures in the stats strip (`index.html`, marked with a comment) are **placeholders
I made up to build the layout**: 12 years, 850 properties, 4.9 rating, 24 h response.

Replace them with your real figures, or delete any KPI you cannot back up. Each one appears
twice — as `data-count="12"` and as the visible text — change both.

### 3. Testimonials — currently examples, not real reviews

The three testimonials on the home page are **written examples**, not real customers.
Publishing invented reviews as though they were genuine is misleading and, in Switzerland,
exposes you under unfair-competition rules (UWG).

Replace them with real, attributable feedback before launch, or delete the whole section —
it is one clearly marked block in `index.html`. The German and English text lives under the
`test.*` keys in `js/i18n.js`.

### 4. Service area — a guess

The town list (Zürich, Winterthur, Zug, Luzern …) is my assumption. It appears on
`index.html` and `kontakt.html`. Swap in the places you actually cover — this also matters
for local search.

### 5. Opening hours

Currently Mon–Fri 07:00–18:00, Sat 08:00–14:00, Sunday closed. Change in `kontakt.html`
and under `topbar.hours` / `ft.hours` in `js/i18n.js`.

### 6. Legal text

`impressum.html` follows the usual Swiss pattern and reflects how this site actually behaves
(no cookies, no tracking, form opens your own mail client). It is a solid starting point,
**not legal advice** — worth a review once your company details are final.

### 7. Photography

The photos are Unsplash stock, free for commercial use. Real photos of your own team,
vans and finished work will convert considerably better. Replace the files in
`assets/img/` keeping the same filenames and nothing else needs changing.

---

## How the German/English toggle works

Every translatable element carries `data-i18n="some.key"`, and `js/i18n.js` holds the German
and English strings for that key. The **German text is also written literally into the HTML**,
so the page is correct and search-engine-readable even with JavaScript switched off.

Attributes translate too, via `data-i18n-attr="placeholder:ct.f.namePh"` — used for input
placeholders, image alt text, the `<title>` and the meta description.

The chosen language is remembered in `localStorage`, and a small script in each page's
`<head>` applies it before the first paint so an English visitor never sees a flash of German.

**To change any wording,** edit the string in `js/i18n.js` under both `de:` and `en:`. If you
change German text, update the matching literal text in the HTML too so the no-JavaScript
version stays in sync.

There is a consistency check you can run any time:

```bash
python3 -c "
import re,pathlib
s=pathlib.Path('js/i18n.js').read_text()
def k(l):
    a=s.index('  %s: {'%l); d=0; i=s.index('{',a)
    for j in range(i,len(s)):
        d+= s[j]=='{'; d-= s[j]=='}'
        if d==0: break
    return set(re.findall(r\"^\s*'([^']+)':\", s[i:j], re.M))
de,en=k('de'),k('en'); print('DE',len(de),'EN',len(en),'| missing:',de^en or 'none')"
```

## The contact form

There is no backend. The form validates in the browser (in whichever language is active),
then opens the visitor's mail client with a structured message pre-filled to your address.
The confirmation message is shown *before* the hand-off, so a submit never looks like nothing
happened even if no mail client is registered.

If you would rather have submissions land in your inbox directly, a service like Formspree or
Web3Forms is a drop-in change to the `form` element — happy to wire that up.

## Notes

- Responsive from 320 px up; no horizontal scrolling at any width.
- Works with JavaScript disabled: all content is real HTML, German is the default.
- **Light theme only** — there is no dark mode, and the browser is told not to
  auto-darken form controls.
- Respects `prefers-reduced-motion` (animations off).
- Keyboard accessible: skip link, focus trap in the mobile menu, Esc to close, visible focus rings.
- Text contrast meets WCAG AA throughout.
- No cookies, no analytics, no third-party requests — everything is served from this folder.

---

## Deploying to Vercel

The repository is already initialised and committed, and `vercel.json` is in place
(caching for assets, plus basic security headers). There is no build step — Vercel
serves the files as they are.

### 1. Create the GitHub repository

On <https://github.com/new>, create an **empty** repository (no README, no
`.gitignore` — this project already has both). Name it something URL-safe such as
`durmisi-clean`; the `&` in the folder name is not valid in a repo name.

Then, from this folder:

```bash
git remote add origin https://github.com/<your-username>/durmisi-clean.git && git push -u origin main
```

### 2. Connect Vercel

1. Go to <https://vercel.com/new> and sign in with GitHub.
2. Import the `durmisi-clean` repository.
3. Leave every build setting at its default — Framework Preset **Other**, no build
   command, output directory the project root. `vercel.json` handles the rest.
4. Deploy.

Every later `git push` to `main` redeploys automatically, and pull requests get
their own preview URL.

### 3. Custom domain

In the Vercel project: **Settings → Domains → Add**, enter your domain, and follow
the DNS records it shows you. HTTPS is issued automatically.

### A note on URLs

Internal links keep their `.html` extension (`/leistungen.html`) so the site also
works when opened straight from the filesystem or from any plain static server.
If you would rather have `/leistungen`, add `"cleanUrls": true` to `vercel.json` —
Vercel will then redirect the `.html` URLs to the extensionless ones.
