# Quick Setup Guide

## Local Development Setup

1. **Install dependencies and link workspace:**
   ```bash
   # From project root
   pnpm install
   ```

2. **Build the shared-types package:**
   ```bash
   cd packages/shared-types
   pnpm install
   pnpm build
   ```

3. **Verify it works:**
   ```bash
   # From project root
   pnpm run sync:banrep
   ```

## For Railway Deployment

### Step 1: Push Package to Git

```bash
cd packages/shared-types
git init
git add .
git commit -m "Initial commit: shared types package"
git remote add origin https://github.com/your-org/shared-types.git
git push -u origin main
```

### Step 2: Update package.json for Railway

Replace the workspace dependency with a Git URL:

```json
{
  "dependencies": {
    "@trm-market-pulse/shared-types": "git+https://github.com/your-org/shared-types.git#main"
  }
}
```

### Step 3: Deploy to Railway

Railway will automatically:
- Install the package from Git during build
- Make it available to your serverless functions

See `RAILWAY.md` for detailed Railway deployment instructions.

## What Changed

✅ **Serverless function updated:**
- Removed duplicate type definitions
- Now imports from `@trm-market-pulse/shared-types`
- Uses `RateSource` and `Currencies` enums instead of strings
- Uses shared `ISnapshotHistory`, `ISyncTrmChangelog`, and `ITrmRate` interfaces

✅ **Shared types package:**
- Updated `ISnapshotHistory` to have optional values
- Updated `ISyncTrmChangelog` to use enums instead of strings
- All types now use proper enums for type safety

✅ **Workspace setup:**
- Created `pnpm-workspace.yaml` for local development
- Package uses `workspace:*` protocol locally

## Next Steps

1. **Test locally:** Run `pnpm install` and test the serverless function
2. **Push to Git:** Create a repository for the shared-types package
3. **Update for Railway:** Change `workspace:*` to Git URL in package.json
4. **Deploy:** Railway will handle the rest automatically

