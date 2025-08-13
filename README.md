# USAMEC - United Spiritual and Academic Mission for Educational Excellence

A modern, responsive website showcasing the network of 30+ educational and spiritual institutions under USAMEC (formerly Divine Light Matha).

## 🌟 Features

### ✨ **Modern Design & User Experience**
- **Bright, Light Theme**: Changed from dark to bright background for better readability
- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Enhanced scroll animations and interactive elements
- **Professional UI**: Clean, modern interface with glass-morphism effects

### 🏛️ **Comprehensive Institution Showcase**
- **3D Roulette Wheel**: Interactive 3D structure displaying all 30+ institutions
- **Detailed Information**: Each institution shows programs, location, student capacity, and more
- **Direct Website Links**: Quick access to institution websites where available
- **Professional Photos**: Support for high-quality institution images

### 🎓 **Alumni Achievements Section**
- **Rotating Display**: Achievements automatically rotate every 4 seconds
- **Rich Content**: Detailed information about alumni accomplishments
- **Interactive Navigation**: Click on dots to view specific achievements
- **Professional Photos**: Support for alumni profile pictures

### 🖼️ **Local Image Management**
- **Organized Structure**: Clear folder organization for all images
- **Logo Support**: Automatic logo display in navigation, footer, and browser tab
- **Fallback System**: Graceful fallback to icons when images aren't available
- **Optimization Ready**: Guidelines for image optimization and sizing

### 🔗 **Enhanced Navigation**
- **Logo Integration**: Logo appears in navigation, footer, and browser tab
- **Smooth Scrolling**: Enhanced navigation with smooth scrolling effects
- **Active States**: Visual feedback for current page/section
- **Mobile Friendly**: Responsive navigation for all screen sizes

## 📁 Project Structure

```
project/
├── index.html                 # Main homepage
├── institutions.html          # Institutions page with 3D roulette
├── images/                   # Image assets directory
│   ├── logo.png             # Main logo (48x48px+ recommended)
│   ├── favicon.ico          # Browser tab icon
│   ├── README.md            # Image organization guide
│   ├── alumni/              # Alumni achievement photos
│   │   ├── rajesh-kumar.jpg
│   │   ├── priya-sharma.jpg
│   │   └── ... (more alumni photos)
│   └── institutions/        # Institution photos
│       ├── gurukul.jpg
│       ├── college.jpg
│       └── ... (more institution photos)
├── images/alumni-achievements.js    # Alumni data
├── images/institutions-data.js      # Comprehensive institution data
└── README.md                # This file
```

## 🚀 Getting Started

### 1. **Setup Images**
- Place your logo in `images/logo.png`
- Add institution photos in `images/institutions/`
- Add alumni photos in `images/alumni/`
- Create `images/favicon.ico` for browser tab icon

### 2. **Run the Website**
- Open `index.html` in a web browser
- Or use a local server for best experience:
  ```bash
  cd project
  python -m http.server 8000
  # Then visit http://localhost:8000
  ```

### 3. **Customize Content**
- Edit `images/alumni-achievements.js` to update alumni information
- Edit `images/institutions-data.js` to modify institution details
- Update text content directly in HTML files

## 🎨 Customization Guide

### **Adding New Alumni Achievements**
1. Add photo to `images/alumni/` folder
2. Update `images/alumni-achievements.js` with new data
3. The system automatically rotates through all achievements

### **Adding New Institutions**
1. Add photo to `images/institutions/` folder
2. Update `images/institutions-data.js` with institution details
3. The 3D roulette automatically includes new institutions

### **Changing Colors & Theme**
- Modify CSS variables in the `:root` section
- Primary colors: Orange (#FF7A00) and Maroon (#800000)
- Background: Light theme with subtle gradients

### **Logo Integration**
- **Navigation**: Automatically appears in top navigation
- **Footer**: Shows in website footer
- **Browser Tab**: Appears as favicon
- **Loading Page**: Integrated throughout the site

## 📱 Responsive Features

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect layout for tablets
- **Desktop Experience**: Enhanced features for larger screens
- **Touch Friendly**: Optimized for touch interactions

## 🔧 Technical Features

- **Vanilla JavaScript**: No external dependencies
- **CSS3 Animations**: Smooth transitions and effects
- **HTML5 Semantic**: Proper semantic markup
- **Performance Optimized**: Fast loading and smooth interactions

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers

## 📸 Image Requirements

### **Logo**
- **Format**: PNG, JPG, SVG, or WebP
- **Size**: 48x48px minimum, 512x512px recommended
- **Background**: Transparent or white preferred

### **Institution Photos**
- **Format**: JPG or WebP
- **Size**: 800x600px minimum, 1920x1080px recommended
- **Aspect Ratio**: 4:3 or 16:9

### **Alumni Photos**
- **Format**: JPG or WebP
- **Size**: 400x400px minimum, 800x800px recommended
- **Aspect Ratio**: 1:1 (square)

## 🚀 Performance Tips

1. **Optimize Images**: Compress and resize images before uploading
2. **Use WebP**: Convert images to WebP format when possible
3. **Lazy Loading**: Images load as needed for better performance
4. **Minimize HTTP Requests**: All CSS and JS is inline for faster loading

## 🔍 SEO Features

- **Semantic HTML**: Proper heading structure and semantic elements
- **Meta Tags**: Comprehensive meta information
- **Alt Text**: Descriptive alt text for all images
- **Structured Data**: Ready for schema markup implementation

## 📞 Support & Maintenance

- **Regular Updates**: Keep institution and alumni information current
- **Image Optimization**: Regularly optimize images for web use
- **Content Updates**: Update achievements and programs as needed
- **Performance Monitoring**: Monitor loading times and user experience

## 🎯 Future Enhancements

- **Database Integration**: Connect to backend for dynamic content
- **Admin Panel**: Easy content management system
- **Multi-language Support**: Support for multiple languages
- **Advanced Analytics**: User behavior tracking and insights
- **Mobile App**: Native mobile application

## 📄 License

This project is created for USAMEC. All rights reserved.

---

**Built with ❤️ for educational excellence and spiritual growth**

For questions or support, please contact the development team.
