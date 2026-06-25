# Autif Shafi — Portfolio

A professional portfolio site built with Angular 17, deployed to Netlify.

## Stack
- Angular 17 (standalone components)
- TypeScript
- Google Fonts: Space Grotesk + Inter + JetBrains Mono
- Pure CSS (no UI frameworks)

## Local Development

```bash
npm install
ng serve
# → http://localhost:4200
```

## Build for Production

```bash
npm run build:prod
# Output: dist/autif-portfolio/browser/
```

## Deploy to Netlify

### Option A — Netlify CLI (fastest)
```bash
npm install -g netlify-cli
netlify login
netlify init        # link to your Netlify account
netlify deploy --prod --dir=dist/autif-portfolio/browser
```

### Option B — GitHub + Netlify (recommended for auto-deploy)
1. Push this repo to GitHub
2. Log in to netlify.com → "Add new site" → "Import from Git"
3. Connect your GitHub repo
4. Set build settings:
   - **Build command:** `npm run build:prod`
   - **Publish directory:** `dist/autif-portfolio/browser`
5. Click **Deploy site**

The `netlify.toml` file handles SPA routing redirects automatically.

## Customization Checklist

- [ ] Replace placeholder GitHub URL in `projects.component.ts` with real project links when available
- [ ] Add real profile photo to `src/assets/` and update hero if desired
- [ ] Update contact phone/email if needed (currently pulled from CV)
- [ ] Set a custom domain in Netlify settings
