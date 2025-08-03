
# Laptop Website

A modern E-commerce website template built with React and TypeScript, featuring comprehensive functionality including product management, user authentication, subscription tiers, and responsive design.

## Features

- **Product Management**: Browse, filter, and view detailed product information
- **User Authentication**: Secure login and registration system
- **Shopping Cart**: Add, remove, and manage cart items
- **Wishlist/Favorites**: Save products for later purchase
- **Subscription Tiers**: 5-tier membership system with exclusive benefits
- **Order Management**: Track orders and view order history
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI**: Gradient styling, hover effects, and intuitive navigation

## Pages & Routes

### Main Pages
- **Home** (`/`) - Landing page with hero section and featured content
- **Products** (`/products`) - Product catalog with filtering and search
- **Product Detail** (`/product/:productId`) - Individual product information
- **Features** (`/features`) - Product features and specifications
- **About Us** (`/about-us`) - Company information and team details
- **How to Use** (`/how-to-use`) - Usage guides and tutorials

### User Account
- **Sign up** (`/sign-up`) - Sign up by creating new account or using 2 available api options
- **Sign in** (`/sign-in`) - Sign in by using existing accoun or using 2 available api options
- **Profile** (`/profile`) - User account management
  - Account Information
  - Payment Details
  - Subscription Management
  - Order History
- **Settings** - Comprehensive user settings interface
- **Subscription** (`/subscription`) - Membership tier selection

### Shopping
- **Cart** (`/cart`) - Shopping cart management
- **Favorites** (`/favorite`) - Saved products wishlist
- **Checkout** (`/checkout`) - Purchase completion
- **Order Detail** (`/order/:orderId`) - Individual order tracking

## Subscription Tiers

The platform offers 5 membership tiers with progressive benefits:

1. **Regular** (Free) - Basic access and standard support
2. **Silver** ($1.99/month) - 5% discount, priority support, free shipping on $50+
3. **Gold** ($2.99/month) - 10% discount, express shipping, exclusive events
4. **Platinum** ($3.99/month) - Enhanced Gold features with premium perks
5. **Diamond** ($4.99/month) - 20% discount, unlimited shipping, 24/7 support

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

### UI Libraries
- **Lucide React** - Beautiful icon library
- **React Select** - Enhanced select components

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Twiztss/Laptop-Website
```

2. **Navigate to project directory**
```bash
cd Laptop-Website
```

3. **Install dependencies**
```bash
npm install
```

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── settings/       # Settings page components
│   ├── shared/         # Common components (Header, Footer, etc.)
│   ├── subscription/   # Subscription-related components
│   └── ui/            # Basic UI elements
├── data/              # Static data and mock content
├── routes/            # Page components and routing
│   └── Profile/       # Profile and settings pages
├── types/             # TypeScript type definitions
└── utils/             # Utility functions and helpers
```

## Design Features

- **Modern Gradients**: Beautiful gradient backgrounds and text effects
- **Responsive Layout**: Mobile-first design approach
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Semantic HTML and keyboard navigation
- **Performance**: Optimized bundle size and loading