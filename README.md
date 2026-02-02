# @trm-market-pulse/shared-types

Shared types, enums, and interfaces for TRM Market Pulse projects.

## Installation

This is a private package. You can install it using one of the following methods:

### Option 1: Install from Git Repository (Recommended for Serverless Functions)

If you have a private Git repository (GitHub, GitLab, Bitbucket), you can install directly from it:

```bash
# Using npm
npm install git+https://github.com/your-org/shared-types.git

# Using pnpm
pnpm add git+https://github.com/your-org/shared-types.git

# Using yarn
yarn add git+https://github.com/your-org/shared-types.git

# For a specific branch or tag
pnpm add git+https://github.com/your-org/shared-types.git#branch-name
pnpm add git+https://github.com/your-org/shared-types.git#v1.0.0
```

**For serverless functions**, this is the recommended approach as it works seamlessly during deployment.

### Option 2: Install from Private npm Registry

If you're using a private npm registry (GitHub Packages, npm Enterprise, etc.):

1. **Publish the package** to your registry:
   ```bash
   npm publish --registry=https://npm.pkg.github.com
   ```

2. **Configure authentication** in your `.npmrc` or serverless environment:
   ```
   @trm-market-pulse:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_TOKEN
   ```

3. **Install the package**:
   ```bash
   npm install @trm-market-pulse/shared-types
   ```

### Option 3: Install from Local Path (Development)

For local development, you can link the package:

```bash
# In the shared-types package directory
pnpm link

# In your project directory
pnpm link @trm-market-pulse/shared-types
```

## Usage

```typescript
// Import everything
import {
  Currencies,
  RateSource,
  IUser,
  ITrmRate,
  BaseError,
  BusinessError
} from '@trm-market-pulse/shared-types';

// Or import specific modules
import { Currencies } from '@trm-market-pulse/shared-types';
import { IUser } from '@trm-market-pulse/shared-types';
```

## Development

### Building

```bash
pnpm install
pnpm build
```

This will compile TypeScript files to the `dist` directory.

### Publishing

Before publishing, make sure to:

1. Update the version in `package.json`
2. Build the package: `pnpm build`
3. Publish to your registry or push to Git

## Structure

- `enums/` - TypeScript enums
- `errors/` - Custom error classes
- `interfaces/entities/` - Entity interfaces
- `interfaces/general/` - General utility interfaces
- `interfaces/repositories/` - Repository interfaces
- `interfaces/services/` - Service interfaces

## Serverless Functions Setup

For serverless functions (AWS Lambda, Vercel, etc.), ensure your deployment configuration can access the Git repository:

### AWS Lambda / Serverless Framework

Add to your `serverless.yml`:
```yaml
package:
  patterns:
    - '!node_modules/**'
    - 'node_modules/@trm-market-pulse/shared-types/**'
```

### Vercel

Vercel automatically installs dependencies from Git during build. Make sure your repository is accessible and the build has the necessary permissions.

### Environment Variables

If using a private npm registry, set these in your serverless environment:
- `NPM_TOKEN` - Your npm authentication token
- `NPM_REGISTRY` - Your private registry URL (if different from default)

