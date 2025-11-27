---
description: How to deploy the portfolio website to Vercel
---

# Deploying to Vercel

This guide will help you deploy your React portfolio to Vercel, a platform optimized for frontend frameworks.

## Prerequisites

- A [Vercel account](https://vercel.com/signup).
- The project files on your local machine (already set up).

## Option 1: Using Vercel CLI (Recommended for Quick Deploy)

1.  **Install Vercel CLI** (if not installed):
    ```bash
    npm i -g vercel
    ```

2.  **Login to Vercel**:
    ```bash
    vercel login
    ```
    Follow the prompts to authenticate with your email or GitHub.

3.  **Deploy**:
    Run the following command in your project root:
    ```bash
    vercel
    ```
    - Set up and deploy? **Y**
    - Which scope? **[Select your account]**
    - Link to existing project? **N**
    - Project name? **[Press Enter for default]**
    - In which directory is your code located? **./**
    - Want to modify these settings? **N**

    Vercel will build and deploy your site. You will get a `Production` URL (e.g., `https://portfolio-website-xyz.vercel.app`).

## Option 2: Using Vercel Dashboard (Git Integration)

1.  **Push to GitHub**:
    - Create a new repository on GitHub.
    - Push your local code to the repository:
      ```bash
      git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
      git branch -M main
      git push -u origin main
      ```

2.  **Import to Vercel**:
    - Go to [Vercel Dashboard](https://vercel.com/dashboard).
    - Click **"Add New..."** -> **"Project"**.
    - Import your GitHub repository.
    - Framework Preset should automatically detect **Vite**.
    - Click **Deploy**.

## Post-Deployment

- **Custom Domain**: You can add a custom domain (e.g., `yourname.com`) in the Vercel project settings.
- **Updates**: If using Option 2, every push to `main` will automatically redeploy your site. If using Option 1, run `vercel --prod` to update.
