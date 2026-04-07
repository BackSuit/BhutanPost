#!/bin/bash

# Output what we're doing
echo "Running custom build script for Vercel deployment..."

# Limit concurrent static generation workers to avoid overwhelming the backend API.
# Default is CPU count (can be 29+ on Vercel), which floods the backend with parallel requests.
export NEXT_WORKER_COUNT=4

# Run the Next.js build
echo "Building Next.js app..."
next build

echo "Build completed successfully!"
