#!/usr/bin/env node

// Simple build script for Cloudflare Pages
import { execSync } from 'child_process';
import { existsSync, mkdirSync, cpSync } from 'fs';
import path from 'path';

console.log('Starting Cloudflare build...');

try {
  // Check if client directory exists
  if (!existsSync('client')) {
    console.error('Client directory not found. Creating structure...');
    
    // Create client directory and copy files
    mkdirSync('client', { recursive: true });
    
    // Copy package files
    if (existsSync('package.json')) {
      cpSync('package.json', 'client/package.json');
    }
    
    console.log('Directory structure created');
  }

  // Navigate to client and build
  process.chdir('client');
  console.log('Building from client directory...');
  
  execSync('npx vite build --outDir ../dist', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  
  console.log('Build completed successfully!');
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}