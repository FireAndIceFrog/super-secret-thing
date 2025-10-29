# Chris & Piyathi's Wedding Website 💍

A beautiful wedding countdown website built with React, TypeScript, and Material-UI featuring an elegant cursive design and real-time countdown to February 2, 2027.

## Features

- 🎨 **Elegant Design**: Beautiful Dancing Script cursive typography
- 📸 **Full-Screen Background**: Proposal photo backdrop covering the entire viewport
- ⏰ **Live Countdown Timer**: Real-time countdown to the wedding date
- 📱 **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- 🎯 **Material-UI Components**: Professional UI components and theming
- ✨ **Decorative RSVP Button**: Stylish navigation element

## Technologies Used

- React 19.1.1
- TypeScript
- Material-UI (MUI)
- Vite
- Google Fonts (Dancing Script)

## Development

### Prerequisites

- Node.js (version 20 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd super-secret-thing
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173/super-secret-thing/](http://localhost:5173/super-secret-thing/) in your browser

### Building for Production

```bash
npm run build
```

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Wedding website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**

3. **Automatic Deployment:**
   - The workflow will automatically trigger on pushes to the `main` branch
   - You can also manually trigger it from the **Actions** tab
   - Once deployed, your site will be available at: `https://yourusername.github.io/super-secret-thing/`

### Manual Deployment (Alternative):

If you prefer manual deployment, you can run:
```bash
npm run build
# Then manually upload the contents of the 'dist' folder to your hosting service
```

## Project Structure

```
├── public/
│   └── chris_proposing.heic    # Background proposal photo
├── src/
│   ├── App.tsx                 # Main wedding homepage component
│   ├── App.css                 # Custom styles and responsive design
│   └── main.tsx               # React app entry point
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions deployment workflow
└── vite.config.ts             # Vite configuration with GitHub Pages base path
```

## Customization

### Changing the Wedding Date
Update the target date in `src/App.tsx`:
```typescript
const targetDate = new Date('2027-02-02T00:00:00').getTime();
```

### Updating the Background Image
Replace `public/chris_proposing.heic` with your desired image, or update the path in `src/App.tsx`:
```typescript
backgroundImage: 'url(/your-image.jpg)',
```

### Modifying Colors and Fonts
The project uses Material-UI theming. Update the theme in `src/App.tsx` or modify the CSS in `src/App.css`.

## License

This is a private wedding website. All rights reserved.

---

Made with ❤️ for Chris & Piyathi's special day
