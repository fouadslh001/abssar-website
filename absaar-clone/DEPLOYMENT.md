# Netlify Deployment Guide for ABSAAR Website Clone

## Prerequisites
- Node.js 18+ installed
- Git repository (GitHub, GitLab, or Bitbucket)
- Netlify account (free at https://netlify.com)

## Pre-Deployment Setup ✅

The following files have been configured for optimal Netlify deployment:

### 1. **Netlify Configuration Files**
- ✅ `netlify.toml` - Build settings, headers, and performance optimizations
- ✅ `public/_redirects` - SPA routing support for React Router
- ✅ `vite.config.js` - Optimized build configuration

### 2. **Asset Handling**
- ✅ All images and videos in `src/assets/images/` will be properly bundled
- ✅ Video files (.mp4) are configured for proper handling
- ✅ Image optimization and caching headers configured

### 3. **Routing Configuration**
- ✅ SPA redirects configured to handle all React Router routes
- ✅ All pages will work correctly: `/`, `/articles`, `/privacy-policy`, etc.

## Deployment Steps

### Method 1: Deploy via Netlify Dashboard (Recommended)

1. **Build the project locally (optional test)**
   ```bash
   npm install
   npm run build
   ```

2. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Add Netlify deployment configuration"
   git push origin main
   ```

3. **Deploy on Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Connect your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository
   - Netlify will auto-detect the settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Post-Deployment Verification

### ✅ Test These Features:
1. **Homepage loads correctly** - Check `/`
2. **All routes work** - Test `/articles`, `/privacy-policy`, `/imprint`, etc.
3. **Images display properly** - Verify all images in `src/assets/images/`
4. **Videos play correctly** - Test video backgrounds and media
5. **Contact form works** - Submit test message via EmailJS
6. **Mobile responsiveness** - Test on different screen sizes
7. **Dark mode toggle** - Verify theme switching works
8. **Language selector** - Test translation functionality

### 🔧 Troubleshooting

**If routes show 404 errors:**
- Verify `public/_redirects` file exists
- Check Netlify deploy logs for errors

**If images/videos don't load:**
- Check browser console for 404 errors
- Verify assets are in `src/assets/images/` directory
- Ensure file names match exactly (case-sensitive)

**If contact form doesn't work:**
- Check EmailJS configuration in `src/config/emailConfig.js`
- Verify EmailJS service is active
- Check browser console for errors

## Performance Optimizations Included

- ✅ **Code splitting** - Vendor and EmailJS chunks separated
- ✅ **Asset optimization** - Images and videos properly cached
- ✅ **Minification** - CSS and JS minified for production
- ✅ **Security headers** - XSS protection and content security
- ✅ **Caching strategy** - Optimal cache headers for static assets

## Environment Variables

No environment variables are required for this deployment. All EmailJS configuration is handled in `src/config/emailConfig.js`.

## Custom Domain (Optional)

To use a custom domain:
1. Go to Netlify dashboard → Site settings → Domain management
2. Add your custom domain
3. Configure DNS records as instructed by Netlify
4. SSL certificate will be automatically provisioned

## Continuous Deployment

Once connected to Git, Netlify will automatically:
- Deploy on every push to main branch
- Run build process with `npm run build`
- Update the live site with new changes

## Support

If you encounter issues:
1. Check Netlify deploy logs in the dashboard
2. Verify all files are committed to Git
3. Test local build with `npm run build`
4. Check browser console for client-side errors

---

**🚀 Your ABSAAR website is now ready for deployment!**

The configuration ensures all images, videos, and routing will work perfectly on Netlify.
