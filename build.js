const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const rootDir = __dirname;
const buildDir = path.join(rootDir, 'build');

try {
  console.log('Starting build process...\n');

  // Clean build directory
  console.log('Cleaning build directory...');
  if (fs.existsSync(buildDir)) {
    fs.removeSync(buildDir);
  }
  fs.ensureDirSync(buildDir);

  // Build frontend
  console.log('Building frontend...');
  execSync('cd frontend && npm run build', { stdio: 'inherit' });

  // Copy frontend build to top-level build directory
  console.log('Copying frontend build...');
  fs.copySync(
    path.join(rootDir, 'frontend', 'build'),
    path.join(buildDir, 'public'),
    { overwrite: true }
  );

  // Copy backend to build directory
  console.log('Copying backend...');
  fs.copySync(
    path.join(rootDir, 'backend'),
    path.join(buildDir, 'backend'),
    {
      overwrite: true,
      filter: (src) => {
        const relativePath = path.relative(path.join(rootDir, 'backend'), src);
        // Exclude node_modules and .env
        if (relativePath.startsWith('node_modules') || relativePath === '.env') {
          return false;
        }
        return true;
      }
    }
  );

  // Copy package.json for backend to build/backend
  fs.copySync(
    path.join(rootDir, 'backend', 'package.json'),
    path.join(buildDir, 'backend', 'package.json')
  );

  // Create a deployment package.json at root of build
  const deploymentPackageJson = {
    name: 'portfolio-deployment',
    version: '1.0.0',
    type: 'commonjs',
    main: 'backend/server.js',
    scripts: {
      start: 'cd backend && npm install && npm start',
      'start:prod': 'cd backend && npm start'
    }
  };

  fs.writeFileSync(
    path.join(buildDir, 'package.json'),
    JSON.stringify(deploymentPackageJson, null, 2)
  );

  // Create README for deployment
  const readmeContent = `# Portfolio Build

This directory contains the built and packaged portfolio application ready for deployment.

## Directory Structure
- \`public/\` - Frontend static files (React build output)
- \`backend/\` - Backend Node.js application

## Deployment Instructions

1. Install dependencies:
   \`\`\`bash
   npm start  # This will install backend dependencies and start the server
   \`\`\`

   Or manually:
   \`\`\`bash
   cd backend
   npm install
   npm start
   \`\`\`

2. The frontend will be served as static files from the backend

3. Make sure to set environment variables in \`backend/.env\` before starting

## Environment Variables Required
- MONGODB_URI
- PORT (default: 5000)
- Any other backend-specific variables
`;

  fs.writeFileSync(
    path.join(buildDir, 'README.md'),
    readmeContent
  );

  console.log('\n✅ Build complete! Output directory: ./build');
  console.log('Ready for deployment.\n');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
