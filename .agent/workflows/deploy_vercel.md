---
description: Deploy the application to Vercel
---

This workflow guides you through deploying your Next.js application to Vercel.

1.  **Login to Vercel**
    If you haven't logged in, this command will prompt you to authenticate.
    ```powershell
    npx vercel login
    ```

2.  **Deploy**
    Run the deployment command. Follow the interactive prompts:
    -   Set up and deploy? [Y]
    -   Which scope? [Select your account]
    -   Link to existing project? [N] (unless you already created one)
    -   Project name? [Leave as default or type a name]
    -   In which directory is your code located? [./]
    -   Want to modify these settings? [N]
    
    ```powershell
    npx vercel
    ```

3.  **Production Deployment (Optional)**
    Once you are happy with the preview deployment, deploy to production.
    ```powershell
    npx vercel --prod
    ```
