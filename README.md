# RemoveBG AI - Professional Background Removal Application

## 📖 Overview

**RemoveBG AI** is a cutting-edge, web-based application designed to automatically remove backgrounds from images using advanced artificial intelligence algorithms. Built with modern web technologies, this application provides a seamless, professional-grade solution for photographers, designers, e-commerce businesses, and content creators who need to quickly and accurately isolate subjects from their backgrounds.

### 🎯 What is RemoveBG AI?

RemoveBG AI is a **client-side web application** that connects to a powerful backend AI service to process images and remove backgrounds with pixel-perfect precision. Unlike traditional photo editing software that requires manual selection and complex masking techniques, our application uses machine learning models to automatically detect and separate foreground subjects from backgrounds in seconds.

### 🚀 What is it used for?

**Primary Use Cases:**

- **E-commerce Product Photography**: Create clean, professional product images with transparent backgrounds for online stores
- **Portrait Photography**: Remove distracting backgrounds from headshots and portraits
- **Digital Marketing**: Create compelling marketing materials with isolated subjects
- **Social Media Content**: Prepare images for social media posts with custom backgrounds
- **Graphic Design**: Extract elements for use in larger design compositions
- **Real Estate**: Enhance property photos by removing unwanted background elements
- **Fashion Photography**: Isolate clothing and accessories for catalog presentations

**Industries Served:**

- **E-commerce & Retail**: Amazon sellers, Shopify stores, online marketplaces
- **Photography Studios**: Wedding, portrait, and commercial photographers
- **Marketing Agencies**: Social media managers, content creators, advertisers
- **Graphic Design**: Freelancers, design agencies, in-house design teams
- **Real Estate**: Property photographers, real estate agents
- **Fashion & Beauty**: Fashion brands, beauty companies, jewelry stores

## 🌟 Features & Capabilities

### 🧠 AI-Powered Core Features

#### **Intelligent Background Detection**

- **Advanced Machine Learning**: Utilizes state-of-the-art deep learning models trained on millions of images
- **Edge Precision**: Maintains fine details like hair strands, fur, transparent objects, and complex edges
- **Multi-Subject Support**: Handles multiple people, objects, or subjects in a single image
- **Complex Scene Understanding**: Accurately processes challenging scenarios like reflections, shadows, and overlapping objects

#### **High-Quality Output Processing**

- **Professional Resolution**: Maintains original image quality and resolution
- **Transparent Background**: Generates PNG files with true transparency
- **Edge Smoothing**: Anti-aliasing algorithms ensure smooth, natural-looking edges
- **Color Preservation**: Maintains accurate colors and lighting of the original subject

### 🖥️ User Interface & Experience

#### **Intuitive Upload System**

- **Drag & Drop Interface**: Simply drag images from your computer directly into the browser
- **Click to Upload**: Traditional file browser option for users who prefer clicking
- **Batch Processing**: Upload and process multiple images simultaneously
- **File Format Support**: Accepts JPG, PNG, WebP, BMP, and GIF formats
- **Size Validation**: Automatic file size checking with clear error messages
- **Preview System**: Instant thumbnail preview before processing

#### **Real-Time Processing Feedback**

- **Progress Indicators**: Visual progress bars showing processing status
- **Live Updates**: Real-time status messages during AI processing
- **Error Handling**: Clear, actionable error messages with solutions
- **Processing Time Estimates**: Approximate completion time based on image complexity

#### **Advanced Comparison Tools**

- **Side-by-Side View**: Compare original and processed images simultaneously
- **Interactive Slider**: Drag to reveal before/after results with smooth transitions
- **Zoom Functionality**: Examine details at pixel level for quality assessment
- **Full-Screen Mode**: Distraction-free viewing for detailed inspection

### 🌍 Internationalization & Accessibility

#### **Multi-Language Support**

- **English**: Complete interface translation for English-speaking users
- **Thai (ภาษาไทย)**: Full Thai language support including cultural adaptations
- **Spanish (Español)**: Comprehensive Spanish translation for Hispanic markets
- **Dynamic Language Switching**: Instant language changes without page refresh
- **Localized Content**: Region-appropriate examples, terminology, and cultural references

#### **Accessibility Features**

- **WCAG 2.1 Compliance**: Meets international accessibility standards
- **Keyboard Navigation**: Full functionality accessible via keyboard
- **Screen Reader Support**: Comprehensive ARIA labels and semantic HTML
- **High Contrast Mode**: Enhanced visibility for users with visual impairments
- **Focus Management**: Clear visual focus indicators for all interactive elements

### 📱 Cross-Platform Compatibility

#### **Responsive Design**

- **Mobile Optimized**: Fully functional on smartphones and tablets
- **Desktop Enhanced**: Advanced features for desktop and laptop users
- **Touch-Friendly**: Optimized touch targets for mobile devices
- **Adaptive Layouts**: Interface adapts to any screen size automatically

#### **Browser Support**

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Performance Optimized**: Fast loading times across all supported browsers
- **Progressive Enhancement**: Core functionality works even on older browsers

## 🚀 Getting Started

### 📋 System Requirements

#### **Development Environment**

- **Node.js**: Version 18.0 or higher (LTS recommended)
- **npm**: Version 8.0 or higher (comes with Node.js)
- **RAM**: Minimum 4GB RAM (8GB recommended for optimal performance)
- **Storage**: At least 500MB free disk space for dependencies
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)

#### **Browser Requirements (for end users)**

- **Chrome**: Version 90+
- **Firefox**: Version 88+
- **Safari**: Version 14+
- **Edge**: Version 90+
- **Internet Connection**: Required for AI processing (backend communication)

#### **Backend Dependencies**

- **AI Backend Service**: Must be running on `http://localhost:8000` or custom URL
- **Python Backend**: Typically requires Python 3.8+ with ML libraries
- **GPU Support**: Recommended for faster AI processing (optional)

### 🔧 Installation Process

#### **Step 1: Environment Setup**

**Install Node.js:**

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version for your operating system
3. Run the installer and follow the setup wizard
4. Verify installation:
   ```bash
   node --version  # Should show v18.0.0 or higher
   npm --version   # Should show v8.0.0 or higher
   ```

**Install Git (if not already installed):**

```bash
# Windows: Download from git-scm.com
# macOS: Install via Homebrew
brew install git

# Linux: Install via package manager
sudo apt install git  # Ubuntu/Debian
sudo yum install git   # CentOS/RHEL
```

#### **Step 2: Project Setup**

**Clone the Repository:**

```bash
# Clone the repository
git clone https://github.com/Mhingzzz/remove-bg-frontend.git
cd remove-bg-frontend

# Or download ZIP and extract
# wget https://github.com/Mhingzzz/remove-bg-frontend/archive/main.zip
# unzip main.zip && cd remove-bg-frontend-main
```

**Install Dependencies:**

```bash
# Install all required packages
npm install

# Alternative: Use Yarn if preferred
# yarn install

# Verify installation
npm list --depth=0  # Shows installed packages
```

#### **Step 3: Configuration**

**Environment Variables:**
Create a `.env.local` file in the project root:

```bash
# Copy the template
cp .env.example .env.local

# Edit with your settings
nano .env.local  # Linux/macOS
notepad .env.local  # Windows
```

**Required Environment Variables:**

```env
# Backend API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
# The URL where your AI backend service is running

# Frontend Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Your frontend domain (for production, use your actual domain)

# Optional: Analytics (Google Analytics)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# Your Google Analytics 4 measurement ID

# Optional: Error Tracking (Sentry)
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
# Your Sentry DSN for error tracking

# Development Configuration
NODE_ENV=development
# Set to 'production' for production builds
```

### 🚀 Development Server

#### **Start Development Mode:**

```bash
# Start the development server with Turbopack (faster)
npm run dev

# Alternative: Standard Next.js development
npx next dev

# The application will be available at:
# http://localhost:3000
```

#### **Development Features:**

- **Hot Reloading**: Changes are reflected instantly without page refresh
- **Error Overlay**: Detailed error messages displayed in the browser
- **Fast Refresh**: React component state is preserved during updates
- **TypeScript Checking**: Real-time type checking and error reporting

### 🏗️ Production Build

#### **Build for Production:**

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# The optimized application will be available at:
# http://localhost:3000
```

#### **Build Optimization Features:**

- **Code Splitting**: Automatic bundle splitting for optimal loading
- **Tree Shaking**: Removes unused code from the final bundle
- **Image Optimization**: Automatic image compression and format conversion
- **Static Generation**: Pre-renders pages for better performance
- **Bundle Analysis**: Use `npm run analyze` to inspect bundle size

## 🛠️ Technology Stack & Architecture

### 🎨 Frontend Technologies

#### **React & Next.js Framework**

- **Next.js 15**: Latest version of the React framework

  - **App Router**: Modern routing system with layouts and nested routes
  - **Server Components**: Improved performance with server-side rendering
  - **Image Optimization**: Automatic image optimization and lazy loading
  - **Built-in CSS Support**: Native support for CSS modules and Tailwind
  - **API Routes**: Backend functionality within the same application

- **React 19**: Latest React version with enhanced features
  - **Concurrent Features**: Better user experience with concurrent rendering
  - **Automatic Batching**: Improved performance through batching updates
  - **Suspense**: Better loading states and data fetching patterns
  - **New Hooks**: Enhanced state management and effect handling

#### **TypeScript Integration**

- **Type Safety**: Compile-time error checking and IntelliSense support
- **Interface Definitions**: Strongly typed component props and API responses
- **Enum Support**: Type-safe constants for status codes and configurations
- **Generic Types**: Reusable, type-safe component patterns
- **Declaration Files**: Custom type definitions for third-party libraries

#### **Styling & UI Framework**

- **Tailwind CSS 4**: Utility-first CSS framework

  - **JIT Compilation**: Just-in-time compilation for optimal bundle size
  - **Custom Design System**: Consistent spacing, colors, and typography
  - **Responsive Design**: Mobile-first responsive utilities
  - **Dark Mode**: Built-in dark mode support with automatic switching
  - **Component Variants**: Flexible component styling patterns

- **Framer Motion 12**: Advanced animation library
  - **Gesture Recognition**: Touch and mouse gesture support
  - **Layout Animations**: Smooth transitions between layout changes
  - **Spring Physics**: Natural motion with physics-based animations
  - **SVG Support**: Animated SVG paths and morphing
  - **Performance Optimized**: Hardware-accelerated animations

#### **UI Components & Libraries**

- **Heroicons**: Professional SVG icon library

  - **Two Styles**: Outline and solid icon variants
  - **Consistent Design**: Designed by the makers of Tailwind CSS
  - **Optimized SVGs**: Lightweight and scalable icons
  - **TypeScript Support**: Full type definitions included

- **React Dropzone**: File upload functionality

  - **Drag & Drop**: Intuitive file dropping interface
  - **File Validation**: Automatic file type and size validation
  - **Multiple Files**: Support for single and multiple file uploads
  - **Accessibility**: Keyboard navigation and screen reader support
  - **Customizable**: Flexible styling and behavior options

- **React Hot Toast**: Notification system

  - **Beautiful Animations**: Smooth enter/exit animations
  - **Customizable**: Custom styling and positioning options
  - **Promise Support**: Automatic handling of async operations
  - **Accessibility**: Screen reader announcements
  - **TypeScript**: Full type safety for all toast options

- **HTML2Canvas**: Screenshot functionality
  - **DOM Rendering**: Converts DOM elements to canvas
  - **High Quality**: Maintains resolution and styling
  - **Cross-browser**: Works across all modern browsers
  - **Async Support**: Non-blocking screenshot generation

### ⚙️ Development Tools & Build System

#### **Build Tools**

- **Turbopack**: Next-generation bundler (experimental)

  - **Faster Builds**: Up to 10x faster than Webpack
  - **Incremental Compilation**: Only rebuilds changed files
  - **Hot Reloading**: Instant updates during development
  - **Tree Shaking**: Automatic dead code elimination

- **ESLint**: Code quality and consistency

  - **Next.js Config**: Optimized rules for Next.js applications
  - **TypeScript Support**: Type-aware linting rules
  - **Custom Rules**: Project-specific coding standards
  - **Auto-fixing**: Automatic code formatting and error correction

- **PostCSS**: CSS processing and optimization
  - **Autoprefixer**: Automatic vendor prefix addition
  - **CSS Nesting**: Modern CSS nesting support
  - **Import Processing**: CSS file bundling and optimization
  - **Tailwind Integration**: Seamless Tailwind CSS processing

#### **Development Environment**

- **Fast Refresh**: Instant component updates without losing state
- **Error Overlay**: Detailed error information in the browser
- **TypeScript Checking**: Real-time type checking during development
- **Hot Module Replacement**: Efficient code updates without full reload

### 🏗️ Architecture Patterns

#### **Component Architecture**

- **Atomic Design**: Organized component hierarchy (atoms, molecules, organisms)
- **Custom Hooks**: Reusable stateful logic extraction
- **Context API**: Global state management for language and theme
- **Compound Components**: Flexible, composable component patterns
- **Higher-Order Components**: Cross-cutting concerns and behavior sharing

#### **State Management**

- **React Context**: Global state for user preferences and app settings
- **Local State**: Component-level state with useState and useReducer
- **Server State**: API data management with proper caching strategies
- **Form State**: Controlled components with validation and error handling

#### **Performance Optimization**

- **Code Splitting**: Dynamic imports for large components and libraries
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Analysis**: Regular bundle size monitoring and optimization
- **Lazy Loading**: Components and images loaded on demand
- **Memoization**: React.memo and useMemo for expensive calculations

### 🔧 API Integration Architecture

#### **Backend Communication**

- **RESTful API**: Standard HTTP methods for backend communication
- **Fetch API**: Modern, promise-based HTTP client
- **Error Handling**: Comprehensive error catching and user feedback
- **Request/Response Types**: Strongly typed API interfaces
- **Loading States**: User feedback during API operations

#### **File Upload System**

- **FormData**: Multipart form data for file uploads
- **Progress Tracking**: Upload progress monitoring and display
- **Error Recovery**: Retry mechanisms for failed uploads
- **File Validation**: Client-side validation before upload
- **Security**: CSRF protection and file type validation

## 📁 Detailed Project Structure

```
rembg-frontend/
├── 📂 app/                          # Next.js App Router directory
│   ├── 📂 api/                      # API routes and serverless functions
│   │   └── 📂 health/               # Health check endpoint
│   │       └── route.ts             # GET /api/health - Application health status
│   │
│   ├── 📂 components/               # Reusable React components
│   │   ├── Analytics.tsx            # Google Analytics integration
│   │   ├── FAQSection.tsx           # Frequently Asked Questions component
│   │   ├── FeatureSection.tsx       # Features showcase with animations
│   │   ├── Footer.tsx               # Site footer with links and info
│   │   ├── ImageComparison.tsx      # Before/after image comparison tool
│   │   ├── ImageUploader.tsx        # Drag & drop file upload interface
│   │   ├── LanguageContext.tsx      # React Context for internationalization
│   │   ├── LanguageSwitcher.tsx     # Language selection dropdown
│   │   ├── LoadingSpinner.tsx       # Loading animation components
│   │   └── StructuredData.tsx       # SEO structured data (JSON-LD)
│   │
│   ├── 📂 locales/                  # Internationalization files
│   │   ├── en.json                  # English translations
│   │   ├── es.json                  # Spanish translations
│   │   └── th.json                  # Thai translations
│   │
│   ├── favicon.ico                  # Site favicon
│   ├── globals.css                  # Global CSS styles and Tailwind imports
│   ├── layout.tsx                   # Root layout with metadata and providers
│   ├── page.tsx                     # Home page component
│   ├── robots.ts                    # Robots.txt generation
│   └── sitemap.ts                   # XML sitemap generation
│
├── 📂 public/                       # Static assets
│   ├── file.svg                     # File upload icon
│   ├── globe.svg                    # Global/language icon
│   ├── next.svg                     # Next.js logo
│   ├── vercel.svg                   # Vercel deployment logo
│   └── window.svg                   # Window/interface icon
│
├── 📂 ssl/                          # SSL certificates (for production)
│   ├── cert.pem                     # SSL certificate
│   └── key.pem                      # SSL private key
│
├── 📄 .env.production.template      # Production environment template
├── 📄 .gitignore                    # Git ignore rules
├── 📄 DEPLOYMENT.md                 # Detailed deployment instructions
├── 📄 Dockerfile                    # Docker container configuration
├── 📄 deploy.bat                    # Windows deployment script
├── 📄 deploy.sh                     # Linux/macOS deployment script
├── 📄 docker-compose.yml            # Docker Compose orchestration
├── 📄 eslint.config.mjs             # ESLint configuration
├── 📄 next-env.d.ts                 # Next.js TypeScript declarations
├── 📄 next.config.ts                # Next.js configuration
├── 📄 nginx.conf                    # Nginx reverse proxy configuration
├── 📄 package.json                  # NPM dependencies and scripts
├── 📄 postcss.config.mjs            # PostCSS configuration
├── 📄 README.md                     # This documentation file
└── 📄 tsconfig.json                 # TypeScript configuration
```

### 🔍 Component Breakdown

#### **Core Application Components**

**`app/layout.tsx`** - Root Layout Component

- **Purpose**: Defines the root HTML structure and global providers
- **Features**: Metadata, language context, analytics integration
- **Dependencies**: LanguageContext, Analytics, StructuredData
- **Key Functions**: SEO optimization, font loading, theme setup

**`app/page.tsx`** - Main Application Page

- **Purpose**: Primary user interface for background removal
- **Features**: Image upload, processing, comparison, download
- **State Management**: Local state for images, processing status
- **User Flow**: Upload → Process → Compare → Download

#### **Feature Components**

**`components/ImageUploader.tsx`** - File Upload Interface

- **Purpose**: Handles file selection and upload validation
- **Features**: Drag & drop, click to upload, file validation
- **Supported Formats**: JPG, PNG, WebP, BMP, GIF
- **Validation Rules**: File size (max 10MB), file type checking
- **Error Handling**: User-friendly error messages and recovery

**`components/ImageComparison.tsx`** - Before/After Comparison

- **Purpose**: Visual comparison of original and processed images
- **Features**: Side-by-side view, interactive slider, zoom functionality
- **Interactions**: Drag slider, click to switch views, download options
- **Responsive**: Adapts to different screen sizes and orientations

**`components/FeatureSection.tsx`** - Features Showcase

- **Purpose**: Highlights application capabilities and benefits
- **Features**: Animated icons, feature descriptions, responsive grid
- **Content**: AI accuracy, speed, formats, quality, privacy
- **Animations**: Framer Motion entrance animations and hover effects

**`components/FAQSection.tsx`** - Frequently Asked Questions

- **Purpose**: Addresses common user questions and concerns
- **Features**: Expandable sections, search functionality
- **Topics**: Usage, pricing, privacy, technical requirements
- **SEO**: Structured data for FAQ rich snippets

#### **Utility Components**

**`components/LanguageContext.tsx`** - Internationalization Provider

- **Purpose**: Manages application language state and translations
- **Features**: Dynamic language switching, persistent preferences
- **Storage**: Browser localStorage for language preference
- **API**: useLanguage hook for component access

**`components/LoadingSpinner.tsx`** - Loading Indicators

- **Purpose**: Provides visual feedback during processing
- **Variants**: Spinner, progress bar, skeleton loading
- **Animations**: Smooth CSS and Framer Motion animations
- **Accessibility**: Screen reader announcements and proper labels

**`components/Analytics.tsx`** - Analytics Integration

- **Purpose**: Tracks user interactions and application performance
- **Services**: Google Analytics 4, custom event tracking
- **Privacy**: GDPR compliant, user consent management
- **Events**: Page views, button clicks, file uploads, processing completion

#### **SEO & Performance Components**

**`components/StructuredData.tsx`** - Structured Data

- **Purpose**: Provides rich snippets for search engines
- **Schemas**: WebApplication, FAQ, Organization, BreadcrumbList
- **Benefits**: Enhanced search results, better click-through rates
- **Languages**: Multi-language structured data support

### 🔧 Configuration Files

#### **`next.config.ts`** - Next.js Configuration

```typescript
// Key configurations:
- Standalone output for Docker deployment
- Image optimization settings
- Experimental Turbopack support
- Security headers and CORS
- Bundle analyzer integration
```

#### **`tailwind.config.js`** - Tailwind CSS Configuration

```javascript
// Custom configurations:
- Brand color palette
- Typography scale
- Spacing system
- Animation timings
- Component variants
```

#### **`tsconfig.json`** - TypeScript Configuration

```json
// Strict type checking enabled
- Path mapping for clean imports
- Next.js specific settings
- DOM and ES2022 library support
- Incremental compilation
```

## 🔧 Configuration & Environment Setup

### 🌍 Environment Variables

Environment variables are used to configure the application for different deployment environments (development, staging, production). Create appropriate `.env` files based on your deployment needs.

#### **Development Environment (`.env.local`)**

```env
# ===========================================
# DEVELOPMENT CONFIGURATION
# ===========================================

# Next.js Environment
NODE_ENV=development
PORT=3000

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
# The URL where your AI backend service is running
# Common alternatives:
# - http://localhost:5000 (if using Flask)
# - http://localhost:3001 (if using Express)
# - https://api.yourdomain.com (remote backend)

# Frontend Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Your frontend domain for CORS and canonical URLs
# Must match your development server URL

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=
# Google Analytics 4 Measurement ID (format: G-XXXXXXXXXX)
# Leave empty to disable analytics in development

# Error Tracking (Optional)
NEXT_PUBLIC_SENTRY_DSN=
# Sentry DSN for error tracking and monitoring
# Leave empty to disable error tracking

# Feature Flags (Optional)
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_ERROR_TRACKING=false
NEXT_PUBLIC_DEBUG_MODE=true
```

#### **Production Environment (`.env.production.local`)**

```env
# ===========================================
# PRODUCTION CONFIGURATION
# ===========================================

# Next.js Environment
NODE_ENV=production
PORT=3000

# API Configuration
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
# Your production backend API URL
# Must be HTTPS in production for security

# Frontend Configuration
NEXT_PUBLIC_APP_URL=https://yourdomain.com
# Your production domain
# Used for canonical URLs, Open Graph, and CORS

# Analytics (Recommended)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# Your Google Analytics 4 Measurement ID
# Essential for tracking user behavior and performance

# Error Tracking (Recommended)
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
# Your Sentry DSN for production error monitoring
# Critical for identifying and fixing issues

# Security
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_ERROR_TRACKING=true
NEXT_PUBLIC_DEBUG_MODE=false

# Performance
NEXT_PUBLIC_ENABLE_SW=true  # Service Worker
NEXT_PUBLIC_ENABLE_PWA=true # Progressive Web App
```

### 🔐 Backend API Integration

The frontend communicates with a backend AI service that performs the actual background removal. Here's what you need to know:

#### **Expected Backend API Interface**

**Endpoint:** `POST /remove-bg`

```http
POST /remove-bg HTTP/1.1
Host: localhost:8000
Content-Type: multipart/form-data
Content-Length: [calculated]

--boundary
Content-Disposition: form-data; name="file"; filename="image.jpg"
Content-Type: image/jpeg

[binary image data]
--boundary--
```

**Expected Response:**

```http
HTTP/1.1 200 OK
Content-Type: image/png
Content-Length: [calculated]

[binary PNG image data with transparent background]
```

#### **Backend Requirements**

**Technology Stack Options:**

- **Python + FastAPI/Flask**: Most common for AI/ML applications
- **Node.js + Express**: For JavaScript-based backends
- **Python + Django**: For larger, more complex applications
- **Go/Rust**: For high-performance requirements

**AI/ML Libraries:**

- **RemBG**: Python library for background removal
- **U^2-Net**: Deep learning model for salient object detection
- **DeepLab**: Google's semantic segmentation model
- **Custom Models**: Your own trained models

**Example FastAPI Backend:**

```python
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import rembg
from PIL import Image
import io

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/remove-bg")
async def remove_background(file: UploadFile = File(...)):
    # Read image
    image_data = await file.read()
    input_image = Image.open(io.BytesIO(image_data))

    # Remove background
    output_image = rembg.remove(input_image)

    # Return as PNG
    img_io = io.BytesIO()
    output_image.save(img_io, format='PNG')
    img_io.seek(0)

    return Response(content=img_io.getvalue(), media_type="image/png")
```

#### **CORS Configuration Requirements**

Your backend must allow requests from your frontend domain:

**For FastAPI:**

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",    # Development
        "https://yourdomain.com"    # Production
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)
```

**For Express.js:**

```javascript
const cors = require("cors");

app.use(
	cors({
		origin: [
			"http://localhost:3000", // Development
			"https://yourdomain.com", // Production
		],
		credentials: true,
		methods: ["GET", "POST"],
		allowedHeaders: ["*"],
	})
);
```

### 🎨 Customization Guide

#### **Branding & Visual Customization**

**Colors (in `app/globals.css`):**

```css
:root {
	/* Primary Brand Colors */
	--primary-50: #eff6ff;
	--primary-500: #3b82f6;
	--primary-600: #2563eb;
	--primary-900: #1e3a8a;

	/* Success Colors */
	--success-500: #10b981;
	--success-600: #059669;

	/* Error Colors */
	--error-500: #ef4444;
	--error-600: #dc2626;

	/* Neutral Colors */
	--gray-50: #f9fafb;
	--gray-900: #111827;
}
```

**Typography:**

```css
/* Custom Font Loading */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

/* Typography Scale */
.text-display-1 {
	font-size: 3.5rem;
	line-height: 1.1;
}
.text-display-2 {
	font-size: 3rem;
	line-height: 1.2;
}
.text-heading-1 {
	font-size: 2.5rem;
	line-height: 1.3;
}
.text-heading-2 {
	font-size: 2rem;
	line-height: 1.4;
}
```

#### **Component Styling Customization**

**Button Variants:**

```tsx
// In your components, modify className combinations
const buttonVariants = {
	primary: "bg-primary-600 hover:bg-primary-700 text-white",
	secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
	success: "bg-success-600 hover:bg-success-700 text-white",
	danger: "bg-error-600 hover:bg-error-700 text-white",
};
```

**Animation Customization:**

```tsx
// Modify Framer Motion animations in components
const customAnimations = {
	fadeIn: {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6, ease: "easeOut" },
	},
	slideIn: {
		initial: { x: -100, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		transition: { type: "spring", stiffness: 100 },
	},
};
```

#### **Content Customization**

**Features Section (`components/FeatureSection.tsx`):**

```tsx
const features = [
	{
		icon: SparklesIcon,
		title: "Your Custom Feature",
		description: "Your custom description here",
	},
	// Add or modify features
];
```

**FAQ Section (`components/FAQSection.tsx`):**

```tsx
const faqs = [
	{
		question: "Your custom question?",
		answer: "Your detailed answer here",
	},
	// Add or modify FAQs
];
```

#### **Internationalization Customization**

**Adding New Languages:**

1. Create new translation file: `app/locales/fr.json` (for French)
2. Add translations following the existing structure
3. Update `LanguageContext.tsx` to include the new language
4. Update language switcher component

**Translation File Structure:**

```json
{
	"nav": {
		"title": "Your App Name",
		"subtitle": "Your App Tagline"
	},
	"upload": {
		"title": "Upload Image",
		"subtitle": "Drag and drop or click to select",
		"processing": "Processing...",
		"error": "Upload failed"
	},
	"features": {
		"title": "Features",
		"ai_powered": "AI-Powered",
		"high_quality": "High Quality"
	}
}
```

### 📊 SEO Configuration

#### **Metadata Customization (in `app/layout.tsx`):**

```tsx
export const metadata: Metadata = {
	title: "Your App Name - Background Remover",
	description: "Your custom description for SEO",
	keywords: "background removal, AI, photo editing, your keywords",
	authors: [{ name: "Your Name" }],
	creator: "Your Company",
	openGraph: {
		title: "Your App Name",
		description: "Your OG description",
		url: "https://yourdomain.com",
		siteName: "Your Site Name",
		images: [
			{
				url: "https://yourdomain.com/og-image.png",
				width: 1200,
				height: 630,
				alt: "Your App Preview",
			},
		],
	},
};
```

#### **Structured Data Customization (in `components/StructuredData.tsx`):**

```tsx
const structuredData = {
	"@context": "https://schema.org",
	"@type": "WebApplication",
	name: "Your App Name",
	description: "Your app description",
	url: "https://yourdomain.com",
	applicationCategory: "MultimediaApplication",
	operatingSystem: "Web Browser",
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "USD",
	},
};
```

- Features: Modify `FeatureSection.tsx`
- FAQ: Edit questions in `FAQSection.tsx`

### Internationalization

- Add new languages in component files
- Update structured data for additional languages
- Modify sitemap for language variants

## 📊 SEO Features

### Meta Tags

- Comprehensive title and description tags
- Open Graph and Twitter Card meta tags
- Multi-language alternate links
- Canonical URLs

### Structured Data

- WebApplication schema
- FAQ schema
- Breadcrumb navigation
- Organization information

### Performance

- Image optimization
- Code splitting
- Bundle optimization
- Compressed assets

## 🔍 Keywords & Search Terms

The application is optimized for:

**English Keywords:**

- background remover, remove background, AI background removal
- photo editor, image editing, transparent background
- background eraser, cut out background, photo background

**Thai Keywords:**

- ลบพื้นหลัง, ลบพื้นหลังภาพ, แต่งรูป
- ตัดพื้นหลัง, พื้นหลังโปร่งใส, แต่งภาพ

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
npx vercel --prod
```

### Netlify

```bash
npm run build
npm run export
# Deploy 'out' folder
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## � Performance Optimization

- **Image Optimization**: WebP/AVIF formats with responsive sizes
- **Bundle Splitting**: Dynamic imports for heavy components
- **Caching**: Static assets and API responses
- **Compression**: Gzip/Brotli compression enabled

## 🔒 Security

- CSRF protection
- XSS prevention
- Content Security Policy headers
- Input validation and sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Icons by [Heroicons](https://heroicons.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- UI framework by [Tailwind CSS](https://tailwindcss.com/)

---

**Built with ❤️ for the community**

For support or questions, please open an issue or contact us.
