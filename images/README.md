# Images Directory Structure

This directory contains all images used in the USAMEC website. Please organize your images according to the following structure:

## Directory Organization

### `/images/` - Root images directory
- **`logo.png`** - Main logo (48x48px or larger for navigation, 512x512px for high resolution)
- **`favicon.ico`** - Browser tab icon (32x32px or 16x16px)
- **`hero-bg.jpg`** - Hero section background image
- **`loading-bg.jpg`** - Loading page background image

### `/images/alumni/` - Alumni achievement photos
- **`rajesh-kumar.jpg`** - Dr. Rajesh Kumar photo
- **`priya-sharma.jpg`** - Priya Sharma photo
- **`arun-patel.jpg`** - Arun Patel photo
- And more alumni photos...

### `/images/institutions/` - Institution photos
- **`gurukul.jpg`** - Divine Light Gurukul
- **`college.jpg`** - Divine Light College
- **`ashram.jpg`** - Divine Light Ashram
- **`medical.jpg`** - Divine Light Medical College
- **`engineering.jpg`** - Divine Light Institute of Technology
- **`business.jpg`** - Divine Light Business School
- **`research.jpg`** - Divine Light Research Center
- **`arts.jpg`** - Divine Light College of Arts
- And 20+ more institution photos...

### `/images/gallery/` - General gallery images
- **`event1.jpg`** - Event photos
- **`campus1.jpg`** - Campus photos
- **`students1.jpg`** - Student life photos
- **`faculty1.jpg`** - Faculty photos

## Image Requirements

### Logo
- **Format**: PNG, JPG, SVG, or WebP
- **Size**: 48x48px minimum, 512x512px recommended
- **Background**: Transparent or white background preferred
- **Usage**: Navigation, footer, loading page, favicon

### Institution Photos
- **Format**: JPG or WebP
- **Size**: 800x600px minimum, 1920x1080px recommended
- **Aspect Ratio**: 4:3 or 16:9
- **Quality**: High quality, professional photos

### Alumni Photos
- **Format**: JPG or WebP
- **Size**: 400x400px minimum, 800x800px recommended
- **Aspect Ratio**: 1:1 (square)
- **Style**: Professional headshots or achievement photos

### Gallery Images
- **Format**: JPG or WebP
- **Size**: 1200x800px minimum
- **Aspect Ratio**: 3:2 or 16:9
- **Quality**: High quality, well-lit photos

## File Naming Convention

- Use lowercase letters
- Separate words with hyphens (-)
- Include descriptive names
- Examples: `divine-light-gurukul.jpg`, `alumni-achievement-2023.jpg`

## Image Optimization

Before uploading images:
1. **Compress** images to reduce file size
2. **Resize** to appropriate dimensions
3. **Convert** to WebP format when possible for better performance
4. **Maintain** aspect ratios
5. **Ensure** good lighting and composition

## Usage in Code

Images are referenced in the HTML using relative paths:
```html
<img src="images/logo.png" alt="USAMEC Logo">
<img src="images/institutions/gurukul.jpg" alt="Divine Light Gurukul">
<img src="images/alumni/rajesh-kumar.jpg" alt="Dr. Rajesh Kumar">
```

## Adding New Images

1. Place the image in the appropriate subdirectory
2. Follow the naming convention
3. Optimize the image for web use
4. Update the corresponding data files if needed
5. Test the image display on the website

## Support

For questions about image organization or optimization, please refer to the main project documentation or contact the development team.
