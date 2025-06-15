# Audiophile E-Commerce Website

A modern e-commerce platform for high-end audio equipment, built with Next.js and featuring a responsive design with seamless shopping experience.

![Audiophile Logo](/public/assets/shared/desktop/logo.svg)

## Features

### Product Browsing
- Category-based navigation (Headphones, Speakers, Earphones)
- Detailed product pages with high-quality images
- Featured products showcase
- New product highlights

### Shopping Experience
- Interactive shopping cart
- Real-time cart updates
- Quantity adjustment for products
- Persistent cart storage

### Checkout Process
- Comprehensive checkout form with:
  - Billing details
  - Shipping information
  - Payment method selection (e-Money/Cash on Delivery)
- Form validation
- Order summary with:
  - Product details
  - Price calculations
  - VAT inclusion
  - Shipping cost
- Order confirmation modal

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Hamburger menu for mobile navigation
- Responsive images and layouts

## Tech Stack

- **Framework**: Next.js
- **Styling**: CSS Modules
- **State Management**: React Hooks
- **Storage**: Local Storage for cart persistence
- **Image Optimization**: Next.js Image Component
- **Form Handling**: Custom form validation

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd audiophile
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
audiophile/
├── app/                    # Next.js app directory
│   ├── checkout/          # Checkout page
│   ├── headphones/        # Headphones category
│   ├── speakers/          # Speakers category
│   └── earphones/         # Earphones category
├── components/            # React components
├── public/                # Static assets
│   └── assets/           # Images and icons
├── styles/               # Global styles
└── data/                # Product data
```

## Key Components

- `Header`: Navigation and cart management
- `Categories`: Product category showcase
- `ProductDetails`: Detailed product view
- `CartModal`: Shopping cart interface
- `CheckoutPage`: Order processing
- `OrderConfirmationModal`: Order completion

## Styling

The project uses CSS Modules for component-specific styling with:
- Consistent color scheme
- Responsive breakpoints
- Modern design elements
- Hover states
- Accessibility considerations

## Cart Functionality

- Add/remove products
- Adjust quantities
- Persistent storage
- Real-time total calculations
- VAT and shipping calculations

## Checkout Process

1. Cart review
2. Form completion
3. Payment method selection
4. Order confirmation
5. Success notification

## Development

### Code Style
- Modern JavaScript (ES6+)
- React best practices
- Component reusability
- Proper TypeScript usage

### Performance Considerations
- Optimized images
- Efficient state management
- Minimal re-renders
- Local storage optimization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
