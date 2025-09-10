# RemoveBG - Professional Background Remover

A modern, AI-powered background removal application built with Next.js, TypeScript, and Tailwind CSS. Features bilingual support (English/Thai), advanced animations, and a professional user interface.

## 🌟 Features

### Core Functionality

- **AI-Powered Background Removal**: Advanced algorithms for precise edge detection
- **High-Quality Results**: Professional-grade output with natural edges
- **Multiple Format Support**: JPG, PNG, WebP, BMP, GIF input formats
- **Interactive Comparison**: Slider-based before/after comparison
- **Instant Download**: Direct download of processed images

### User Experience

- **Drag & Drop Upload**: Intuitive file upload interface
- **Real-time Processing**: Live progress indicators and feedback
- **Mobile Optimized**: Responsive design for all devices
- **Dark Mode Support**: Automatic theme switching
- **Smooth Animations**: Framer Motion powered transitions

### Multilingual & SEO

- **Bilingual Support**: Full English and Thai language support
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG compliant design
- **Fast Loading**: Optimized images and code splitting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Backend API running on `http://localhost:8000`

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd rembg-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 🛠️ Tech Stack

### Frontend

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions

### UI Components

- **Heroicons**: Beautiful SVG icons
- **React Dropzone**: File upload functionality
- **React Hot Toast**: Elegant notifications
- **HTML2Canvas**: Screenshot capture for comparison downloads

### Development Tools

- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Turbopack**: Fast bundler (experimental)

## 📁 Project Structure

```
app/
├── api/                    # API routes
│   └── health/            # Health check endpoint
├── components/            # Reusable components
│   ├── ImageUploader.tsx  # File upload interface
│   ├── ImageComparison.tsx # Before/after comparison
│   ├── FeatureSection.tsx # Features showcase
│   ├── FAQSection.tsx     # Frequently asked questions
│   ├── Footer.tsx         # Site footer
│   ├── LoadingSpinner.tsx # Loading indicators
│   ├── StructuredData.tsx # SEO structured data
│   └── Analytics.tsx      # Analytics tracking
├── globals.css           # Global styles
├── layout.tsx           # Root layout
├── page.tsx            # Home page
├── sitemap.ts         # XML sitemap
└── robots.ts         # Robots.txt
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (optional)
```

### Backend Integration

The app expects a backend API at `/remove-bg` endpoint:

```typescript
// Expected API interface
POST /remove-bg
Content-Type: multipart/form-data
Body: FormData with 'file' field

Response: Image blob (PNG with transparent background)
```

### CORS Configuration

Ensure your backend allows requests from your frontend domain:

```python
# Example for FastAPI
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 🎨 Customization

### Styling

- Colors: Edit CSS variables in `globals.css`
- Components: Modify Tailwind classes in component files
- Animations: Adjust Framer Motion settings

### Content

- SEO: Update metadata in `layout.tsx`
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

## 📈 Performance Optimization

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
