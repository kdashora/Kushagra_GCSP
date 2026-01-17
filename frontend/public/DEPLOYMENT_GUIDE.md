# GitHub Pages Deployment Guide

## Files You Need

Your repository structure should look like this:

```
your-repo/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── About_Me.jpeg
    ├── GCSP_Logo.webp
    ├── Wisk_Logo.webp
    ├── HST318.png
    ├── FSE301.jpg
    ├── Food_and_Culture.png
    ├── Language_and_Culture.png
    ├── Devils_Prosthetics.JPG
    ├── Fulton_ambassadors.jpeg
    └── hero-bg.jpg
```

## Images to Download

Download these images from the Emergent URLs and save them with these EXACT names in the `images/` folder:

1. **About_Me.jpeg**
   - URL: https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/hsdxbeaf_About_Me.jpeg

2. **GCSP_Logo.webp** (Note: renamed from "GCSP Logo.webp" - removed space)
   - URL: https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/8kjhsrut_GCSP%20Logo.webp

3. **Wisk_Logo.webp**
   - URL: https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/su97u3i1_Wisk_Logo.webp

4. **HST318.png**
   - URL: https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/7zxcv7q8_HST318.png

5. **FSE301.jpg**
   - URL: https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/ywvnmk13_FSE301.jpg

6. **Food_and_Culture.png**
   - URL: https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/5429nxs4_Food_and_Culture.png

7. **Language_and_Culture.png**
   - URL: https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/8a0kmx1w_Language_and_Culture.png

8. **Devils_Prosthetics.JPG**
   - URL: https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/96wux51c_Devils_Prosthetics.JPG

9. **Fulton_ambassadors.jpeg**
   - URL: https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/hb4kyun0_Fulton_ambassadors.jpeg

10. **hero-bg.jpg**
    - URL: https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/oidr6ll7_hero-bg.jpg

## Step-by-Step Deployment

### Step 1: Download Images
1. Right-click each URL above and select "Save Link As..."
2. Save each image with the EXACT filename listed (including capitals and file extension)
3. Put all images in a folder called `images`

### Step 2: Set Up Repository
1. Create a new folder on your computer called `gcsp-portfolio`
2. Copy these files into it:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Create an `images` folder inside `gcsp-portfolio`
4. Put all 10 downloaded images in the `images` folder

### Step 3: Push to GitHub
```bash
cd gcsp-portfolio
git init
git add .
git commit -m "Initial commit - GCSP Portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings > Pages
3. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
4. Click Save
5. Wait 1-2 minutes

Your site will be live at: `https://yourusername.github.io/your-repo/`

## Troubleshooting

**Images not loading?**
- Check that filenames match EXACTLY (including capitals)
- Make sure images are in the `images/` folder
- Check browser console for errors (F12)

**Page not loading?**
- Verify `index.html` is in the root, not in a subfolder
- Make sure GitHub Pages is enabled in Settings
- Wait a few minutes after enabling Pages

**Need help?**
Contact: kdashora@asu.edu
