# Railway Deployment Guide for Shared Types Package

This guide explains how to use the `@trm-market-pulse/shared-types` package in serverless functions deployed on Railway.

## Prerequisites

1. The shared-types package must be in a Git repository (GitHub, GitLab, Bitbucket, etc.)
2. The repository must be accessible from Railway (public or private with proper authentication)

## Setup Options

### Option 1: Git Repository (Recommended for Railway)

Railway can install packages directly from Git repositories during the build process.

#### Step 1: Push Package to Git Repository

```bash
cd packages/shared-types
git init
git add .
git commit -m "Initial commit: shared types package"
git remote add origin https://github.com/your-org/shared-types.git
git push -u origin main
```

#### Step 2: Update package.json

In your main project's `package.json`, add the dependency:

```json
{
  "dependencies": {
    "@trm-market-pulse/shared-types": "git+https://github.com/your-org/shared-types.git"
  }
}
```

For a specific branch or tag:
```json
{
  "dependencies": {
    "@trm-market-pulse/shared-types": "git+https://github.com/your-org/shared-types.git#main"
  }
}
```

#### Step 3: Railway Configuration

Railway will automatically:
1. Run `pnpm install` (or `npm install`) during build
2. Install the package from the Git repository
3. Make it available to your serverless functions

**No additional Railway configuration needed!** Railway handles Git-based dependencies automatically.

### Option 2: Private Git Repository with Authentication

If your repository is private, you'll need to set up authentication:

#### Using SSH (Recommended)

1. **Add SSH key to Railway:**
   - Go to your Railway project settings
   - Add your SSH private key as a secret
   - Name it `SSH_PRIVATE_KEY`

2. **Update package.json:**
   ```json
   {
     "dependencies": {
       "@trm-market-pulse/shared-types": "git+ssh://git@github.com/your-org/shared-types.git"
     }
   }
   ```

3. **Configure SSH in Railway build:**
   Add a build script or use Railway's build hooks to set up SSH:
   ```bash
   # In your build command or railway.json
   mkdir -p ~/.ssh
   echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
   chmod 600 ~/.ssh/id_rsa
   ssh-keyscan github.com >> ~/.ssh/known_hosts
   ```

#### Using HTTPS with Personal Access Token

1. **Create a GitHub Personal Access Token** with `repo` scope

2. **Add token to Railway secrets:**
   - Name: `GITHUB_TOKEN`
   - Value: Your personal access token

3. **Update package.json:**
   ```json
   {
     "dependencies": {
       "@trm-market-pulse/shared-types": "git+https://YOUR_TOKEN@github.com/your-org/shared-types.git"
     }
   }
   ```

   **Note:** For security, use an environment variable:
   ```json
   {
     "dependencies": {
       "@trm-market-pulse/shared-types": "git+https://${GITHUB_TOKEN}@github.com/your-org/shared-types.git"
     }
   }
   ```

   However, package.json doesn't support environment variables directly. Instead, use a `.npmrc` file:

   **Create `.npmrc` in your project root:**
   ```
   @trm-market-pulse:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```

   Or use a build script to modify package.json before install.

### Option 3: Local Workspace (Development Only)

For local development, you can use pnpm workspaces:

1. **Create `pnpm-workspace.yaml` in project root:**
   ```yaml
   packages:
     - 'packages/*'
   ```

2. **Update package.json:**
   ```json
   {
     "dependencies": {
       "@trm-market-pulse/shared-types": "workspace:*"
     }
   }
   ```

**Note:** This only works locally. For Railway deployment, use Option 1 or 2.

## Railway Build Configuration

### Using railway.json (Optional)

Create a `railway.json` file in your project root for custom build configuration:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "pnpm install && pnpm build"
  },
  "deploy": {
    "startCommand": "node dist/app.js",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### Environment Variables

If using private repositories, set these in Railway:

- `GITHUB_TOKEN` - For GitHub private repos
- `SSH_PRIVATE_KEY` - For SSH authentication
- `NPM_TOKEN` - If using npm registry

## Serverless Functions on Railway

Railway supports serverless functions through:

1. **Cron Jobs** - Scheduled tasks
2. **Background Workers** - Long-running processes
3. **API Services** - HTTP endpoints

### Example: Cron Job Configuration

For your `sync-banrep-col-trm.ts` serverless function:

1. **Create a Railway service** for the cron job
2. **Set the start command:**
   ```bash
   bun run src/serverless/sync-banrep-col-trm.ts
   ```
   or
   ```bash
   node dist/serverless/sync-banrep-col-trm.js
   ```

3. **Configure the schedule** in Railway's cron settings:
   ```
   */10 12-19 * * 1-5
   ```

4. **Ensure dependencies are installed:**
   Railway will run `pnpm install` automatically, which will install your shared-types package from Git.

## Troubleshooting

### Package Not Found

**Error:** `Cannot find module '@trm-market-pulse/shared-types'`

**Solutions:**
1. Verify the Git URL in package.json is correct
2. Check that the repository is accessible (not private or has proper auth)
3. Ensure Railway has network access to the Git repository
4. Check Railway build logs for installation errors

### Authentication Issues

**Error:** `Permission denied (publickey)` or `401 Unauthorized`

**Solutions:**
1. Verify SSH key is correctly set in Railway secrets
2. Check that GitHub token has correct permissions
3. Ensure the token hasn't expired
4. Verify the repository URL format is correct

### Build Timeout

**Error:** Build takes too long or times out

**Solutions:**
1. Ensure the shared-types package is built before pushing to Git
2. Consider pre-building and committing the `dist` folder
3. Use a specific Git tag/commit instead of branch to avoid unnecessary builds
4. Check Railway build logs for specific timeout errors

### TypeScript Errors

**Error:** Type errors when using the package

**Solutions:**
1. Ensure the package is built: `cd packages/shared-types && pnpm build`
2. Verify `dist/index.d.ts` exists in the Git repository
3. Check that TypeScript can resolve the types correctly
4. Ensure peer dependencies are installed in your main project

## Best Practices

1. **Version Pinning:** Use specific Git tags or commits instead of branches for production:
   ```json
   "@trm-market-pulse/shared-types": "git+https://github.com/your-org/shared-types.git#v1.0.0"
   ```

2. **Pre-build Package:** Build the package before committing to avoid build issues on Railway:
   ```bash
   cd packages/shared-types
   pnpm build
   git add dist
   git commit -m "Add built package"
   ```

3. **Separate Repository:** Keep the shared-types package in its own repository for better versioning and access control.

4. **Monitor Builds:** Check Railway build logs regularly to catch dependency issues early.

## Example: Complete Setup

1. **Package repository:** `https://github.com/your-org/shared-types`
2. **Main project package.json:**
   ```json
   {
     "dependencies": {
       "@trm-market-pulse/shared-types": "git+https://github.com/your-org/shared-types.git#main"
     }
   }
   ```
3. **Railway automatically:**
   - Clones your main project
   - Runs `pnpm install`
   - Installs shared-types from Git
   - Builds your project
   - Deploys your serverless functions

That's it! Railway handles the rest automatically.

