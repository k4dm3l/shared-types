# Railway Deployment with Workspace Package

If you're keeping the shared-types package in the same repository (workspace setup), Railway needs to build it before building the main project.

## Solution

The build script has been updated to build workspace packages first:

```json
{
  "scripts": {
    "build": "pnpm --filter @trm-market-pulse/shared-types build && tsc && tsc-alias"
  }
}
```

This ensures:
1. ✅ Shared-types package is built first
2. ✅ Type declarations are available for the main project
3. ✅ Main project can compile successfully

## How It Works

1. **During Railway build:**
   - `pnpm install` installs all dependencies
   - `pnpm run build` runs:
     - First: Builds `@trm-market-pulse/shared-types` → creates `dist/` folder
     - Then: Builds main project → can now find the types

2. **The build order:**
   ```
   pnpm install
   ↓
   pnpm --filter @trm-market-pulse/shared-types build
   ↓ (creates packages/shared-types/dist/)
   pnpm run build (main project)
   ↓ (can now import from @trm-market-pulse/shared-types)
   ```

## Alternative: Separate Git Repository

If you want to publish the shared-types package to a separate Git repository:

1. **Push shared-types to its own repo:**
   ```bash
   cd packages/shared-types
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-org/shared-types.git
   git push -u origin main
   ```

2. **Update package.json dependency:**
   ```json
   {
     "dependencies": {
       "@trm-market-pulse/shared-types": "git+https://github.com/your-org/shared-types.git#main"
     }
   }
   ```

3. **Remove workspace setup:**
   - Remove `pnpm-workspace.yaml`
   - Remove `packages/shared-types` from your main repo (or keep it for local dev only)

4. **Update build script:**
   ```json
   {
     "scripts": {
       "build": "tsc && tsc-alias"
     }
   }
   ```

Railway will install the package from Git during `pnpm install`, so no build step needed for the package.

## Current Setup (Workspace)

With the current workspace setup, Railway will:
- ✅ Detect the workspace
- ✅ Install all dependencies
- ✅ Build shared-types first
- ✅ Build main project
- ✅ Deploy successfully

No additional configuration needed!

