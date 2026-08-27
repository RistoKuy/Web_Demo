# Web Demo - Aristo Baadi's CV

This is a web-based CV for Aristo Baadi, showcasing his profile, education, skills, experience, and projects. It is a single-page site built with HTML, Tailwind CSS, Alpine.js, and data loaded from `data.json`.

## Live Demo

Visit the live website: [https://ristokuy.github.io/Web_Demo/](https://ristokuy.github.io/Web_Demo/)

## Features

- **Theme toggle**: Switches between light and dark mode.
- **Responsive layout**: Adapts to desktop and mobile screen sizes.
- **Smooth scrolling**: Navigation links scroll to page sections.
- **Data-driven content**: Profile, education, experience, skills, projects, and contact details are loaded from `data.json`.
- **Project filtering**: Projects can be filtered by category.
- **Mobile navigation**: Includes a collapsible menu on smaller screens.

## Technologies Used

- **HTML**: Structure of the web page.
- **Tailwind CSS CDN**: Utility classes for the page layout and styling.
- **Alpine.js**: Handles data binding and page interactions.
- **Lucide**: Provides interface icons.
- **JavaScript**: Loads `data.json` and controls theme, navigation, and filtering.

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RistoKuy/Web_Demo.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd Web_Demo
    ```
3. **Serve the project locally** and open the site in your browser. For example, from the project directory:
    ```bash
    python -m http.server
    ```
   Then visit `http://localhost:8000`.

## Customization

- **Profile picture**: Replace the image at `assets/img/profile.jpeg` and update its path in `data.json` if needed.
- **Content**: Update the profile and section data in `data.json`.
- **Styling and layout**: Update the Tailwind classes and embedded styles in `index.html`.