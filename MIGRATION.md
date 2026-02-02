# Migration Guide

This guide explains how to migrate from using local shared types to the `@trm-market-pulse/shared-types` package.

## Step 1: Publish or Push the Package

First, you need to make the package available:

### Option A: Git Repository
1. Create a new Git repository for the shared-types package
2. Push the `packages/shared-types` directory to the repository
3. Note the repository URL

### Option B: Private npm Registry
1. Configure your npm registry authentication
2. Run `npm publish` from the `packages/shared-types` directory

## Step 2: Install the Package

In your main project (`trm-market-pulse-api`):

```bash
# If using Git
pnpm add git+https://github.com/your-org/shared-types.git

# If using npm registry
pnpm add @trm-market-pulse/shared-types
```

## Step 3: Update Imports

Replace all imports from `@/shared/*` with imports from `@trm-market-pulse/shared-types`:

### Before:
```typescript
import { Currencies } from '@/shared/enums/currencies';
import { IUser } from '@/shared/interfaces/entities/IUser.interface';
import BaseError from '@/shared/errors/BaseError';
```

### After:
```typescript
import { Currencies, IUser, BaseError } from '@trm-market-pulse/shared-types';
```

## Step 4: Update TypeScript Paths (Optional)

You can optionally add a path alias in `tsconfig.json` to maintain backward compatibility:

```json
{
  "compilerOptions": {
    "paths": {
      "@trm-market-pulse/shared-types": ["./node_modules/@trm-market-pulse/shared-types"]
    }
  }
}
```

## Step 5: Remove Old Shared Directory

Once all imports are updated and tested:

1. Remove the `src/shared` directory
2. Update any remaining references
3. Test the application thoroughly

## Step 6: Update Other Projects

For other projects that use similar types:

1. Install the package using the same method
2. Update imports to use the package
3. Remove duplicate type definitions

## Troubleshooting

### TypeScript Errors

If you encounter TypeScript errors after migration:
- Ensure the package is built: `cd packages/shared-types && pnpm build`
- Check that `dist/index.d.ts` exists
- Verify imports are correct

### Serverless Deployment Issues

If serverless functions fail to install the package:
- Ensure the Git repository is accessible during build
- Check that authentication tokens are set correctly
- Verify the package.json `files` field includes `dist`

