
# 🥤 Fulo's Blend - Fresh Smoothies Website

<div align="center">
  
![Website Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38B2AC)
![License](https://img.shields.io/badge/License-Proprietary-red)

**A modern, responsive website for Fulo's Blend smoothie business in Bunda, Malawi**

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Screenshots](#-screenshots)

</div>

## 📋 Overview

Fulo's Blend is a professional website for a local smoothie business based in Bunda, Lilongwe, Malawi. The website showcases delicious fruit smoothies made from fresh, locally-sourced ingredients while providing an easy way for customers to place orders via WhatsApp.

> **Business Motto**: *"Try us, you won't regret!"*

## 🌟 Features

### ✨ **Core Features**
- **📱 Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **🛒 WhatsApp Ordering System** - Direct order placement with pre-filled messages
- **🍓 Interactive Product Menu** - Browse smoothies with prices, descriptions, and badges
- **📍 Local Business Focus** - Highlights Malawi-grown fruits and supports local farmers
- **🎨 Smooth Animations** - Engaging transitions using Framer Motion

### 🛠️ **Technical Features**
- **⚡ Blazing Fast Performance** - Built with Vite for optimal speed
- **🔒 Type Safety** - Full TypeScript integration
- **🎯 SEO Optimized** - Proper meta tags and semantic HTML
- **📞 Contact Integration** - Multiple contact methods (phone, WhatsApp, email)
- **🌈 Custom Branding** - Tailored color scheme matching fruit themes

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/fulos-blend.git
cd fulos-blend
Install dependencies

bash
npm install
# or
yarn install
Start the development server

bash
npm run dev
# or
yarn dev
Open in browser
Navigate to http://localhost:5173

📁 Project Structure
text
fulos-blend/
├── public/
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # Website icon
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.tsx     # Navigation component
│   │   ├── Hero.tsx       # Hero section with main banner
│   │   ├── Menu.tsx       # Product menu section
│   │   ├── About.tsx      # About us section
│   │   ├── Contact.tsx    # Contact form section
│   │   └── Footer.tsx     # Footer component
│   ├── constants.ts       # Business data (smoothies, contact info)
│   ├── types.ts           # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   └── index.tsx          # Application entry point
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # This file
🎨 Customization Guide
1. Update Business Information
Edit src/constants.ts:

typescript
export const CONTACT_INFO = {
  phone1: '0888246618',          // Update with your phone number
  phone2: '0998878233',          // Update with secondary number
  email: 'florencekakwera@gmail.com', // Update with your email
  location: 'Bunda',             // Update your location
};
2. Update Menu Items
Modify the SMOOTHIES array in src/constants.ts:

typescript
{
  id: '1',
  name: 'Bunda Sunshine',       // Smoothie name
  description: 'Your description here...', // Update description
  price: 'MK 2,500',            // Update price
  image: 'your-image-url.jpg',  // Replace image URL
  category: 'Tropical',         // Category
  badges: ['Customer Favorite'] // Feature badges
}
3. Change Colors
Update the color palette in public/index.html (lines 21-30):

javascript
colors: {
  brand: {
    yellow: '#fbbf24',  // Mango/Banana color
    orange: '#f97316',  // Orange accent
    red: '#e11d48',     // Strawberry color
    green: '#65a30d',   // Avocado color
    brown: '#78350f',   // Text color
    cream: '#fffbeb',   // Background color
  }
}
4. Replace Images
Replace image URLs in these locations:

Hero image: src/components/Hero.tsx (line 92)

Smoothie images: src/constants.ts (all image properties)

About section images: src/components/About.tsx (lines 28, 32)

Recommended image size: 800x600px, optimized for web.

📞 WhatsApp Integration
The website includes seamless WhatsApp ordering:

Menu Items: Each smoothie has an "Order via WhatsApp" button

Contact Form: Custom messages with customer details

Direct Contact: Phone numbers are clickable for immediate calls

WhatsApp Message Format:

text
*Hello Fulo's Blend!* 🥤

I would like to order: *[Smoothie Name]*

My Details:
👤 Name: [Customer Name]
📱 Phone: [Customer Phone]
📍 Location: [Customer Location]

Message:
[Custom Message]
🚀 Deployment
Build for Production
bash
npm run build
# Output will be in 'dist/' folder
Deployment Options
Option 1: Vercel (Recommended)
Push code to GitHub/GitLab

Import project at vercel.com

Automatic deployments on push

Option 2: Netlify
Drag and drop dist/ folder to Netlify

Or connect GitHub repository

Option 3: GitHub Pages
bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
📱 Browser Support
Chrome 90+

Firefox 88+

Safari 14+

Edge 90+

Mobile browsers (iOS Safari, Chrome for Android)

🤝 Support
For business inquiries:

Phone: 0888246618 / 0998878233

Email: florencekakwera@gmail.com

Location: Bunda, Lilongwe, Malawi

For technical support or feature requests, please open an issue on GitHub.

📝 License
© 2024 Fulo's Blend. All rights reserved.

This project is proprietary software developed for Fulo's Blend business. Unauthorized copying, distribution, or use is strictly prohibited.

🙏 Acknowledgements
Icons: Lucide React

Animations: Framer Motion

Styling: Tailwind CSS

Images: Unsplash (replace with your own)

<div align="center">
"Try us, you won't regret!" 🥭🍓🍌

Supporting local farmers • Fresh ingredients • Made with love in Malawi

</div> ```
📋 Additional Files You Might Want:
1. CONTRIBUTING.md
markdown
# Contributing to Fulo's Blend Website

## How to Contribute

### Reporting Bugs
1. Check if the bug already exists in Issues
2. Create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features
1. Check existing feature requests
2. Describe the feature clearly
3. Explain the benefit to users
4. Provide mockups if possible

### Code Contributions
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Code Style
- Use TypeScript for all new code
- Follow existing naming conventions
- Add comments for complex logic
- Ensure responsive design
- Test on mobile and desktop
2. CHANGELOG.md
markdown
# Changelog

## [1.0.0] - 2024-01-15
### Added
- Initial website launch
- Complete smoothie menu
- WhatsApp integration
- Contact form
- Responsive design
- All core sections (Hero, Menu, About, Contact)

### Features
- 7 smoothie varieties
- Mobile-friendly navigation
- Smooth animations
- Local business focus
- Malawi-themed design


