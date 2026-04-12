# Add CI build with mocked Contentful

## Context
The blog uses Contentful for CMS content. `ng build` (with Angular SSR) may call
Contentful at build time during pre-rendering. CI currently only runs `npm ci` — no
build step until mocking is in place. Once done, the `validate` CI job will include
a real build check on every PR.

## Plan

1. Read `src/environments/environment.ts` to identify all Contentful key names
2. Create `src/environments/environment.ci.ts` with matching keys set to empty strings:
   ```ts
   export const environment = {
     production: false,
     contentfulSpaceId: '',
     contentfulAccessToken: '',
     // ... mirror all keys from environment.ts, set to ''
   };
   ```
3. Add `ci` build configuration to `angular.json` under
   `projects.<project-name>.architect.build.configurations`:
   ```json
   "ci": {
     "fileReplacements": [
       {
         "replace": "src/environments/environment.ts",
         "with": "src/environments/environment.ci.ts"
       }
     ]
   }
   ```
4. Add script to `package.json`:
   ```json
   "build:ci": "ng build --configuration=ci"
   ```
5. Update `.github/workflows/ci.yml` — add after `npm ci`:
   ```yaml
   - run: npm run build:ci
   ```
6. Verify locally: `npm run build:ci` should compile without errors
7. Commit and push
