# Recipe Management Web Application

A sleek and modern recipe management web application built with Next.js, TypeScript, and Tailwind CSS. Browse, search, and view detailed recipes with a beautiful, responsive design.

## Features

- 🍳 **Recipe Collection**: Browse a curated collection of delicious recipes
- 🔍 **Smart Search**: Search recipes by title, description, or ingredients
- 📱 **Responsive Design**: Beautiful design that works on desktop and mobile
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🎨 **Modern UI**: Clean, modern interface with Tailwind CSS
- 📄 **Recipe Details**: Detailed view with ingredients, instructions, and cooking times
- 🚀 **Easy to Extend**: Modular codebase ready for backend integration

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Images**: Next.js Image Optimization
- **Data**: JSON file (ready for database integration)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd recipe-management
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── recipe/[id]/       # Dynamic recipe detail pages
├── components/            # Reusable components
│   ├── RecipeCard.tsx     # Recipe card component
│   ├── RecipeGrid.tsx     # Recipe grid layout
│   └── SearchBar.tsx      # Search functionality
├── data/                  # Static data
│   └── recipes.json       # Recipe database
├── types/                 # TypeScript definitions
│   └── recipe.ts          # Recipe interfaces
└── utils/                 # Utility functions
    └── recipeUtils.ts     # Recipe data operations
```

## Data Structure

Recipes are stored in `src/data/recipes.json` with the following structure:

```typescript
interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
}
```

## Features Overview

### Home Page

- Displays all recipes in a responsive grid
- Search bar for filtering recipes
- Recipe cards with images, titles, and key information
- Loading states and empty states

### Recipe Detail Page

- Full recipe information
- High-quality recipe images
- Organized ingredients list
- Step-by-step cooking instructions
- Prep time, cook time, and serving information
- Back navigation to recipe list

### Search Functionality

- Real-time search as you type
- Searches recipe titles, descriptions, and ingredients
- Case-insensitive matching
- Instant results

## Customization

### Adding New Recipes

1. Open `src/data/recipes.json`
2. Add a new recipe object with all required fields
3. Use high-quality images (Unsplash URLs are included in examples)
4. Ensure the `id` is unique

### Styling

The application uses Tailwind CSS for styling. Key design elements:

- Clean, modern card-based layout
- Consistent spacing and typography
- Hover effects and transitions
- Responsive grid system
- Accessible color contrast

### Extending Functionality

The codebase is designed for easy extension:

- **Database Integration**: Replace JSON file with API calls in `recipeUtils.ts`
- **User Features**: Add authentication and user-specific features
- **Recipe Management**: Add create, edit, delete functionality
- **Categories**: Add recipe categorization and filtering
- **Favorites**: Add ability to save favorite recipes

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

Build the application for production:

```bash
npm run build
npm run start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub.

---

**Happy Cooking! 🍳**
