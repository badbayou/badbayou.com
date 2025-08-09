# BadBayou

A Hugo-powered static website project.

## Getting Started

### 1. Clone and Setup

```bash
git clone <repository-url>
cd badbayou
```

### 2. Install or Create a Theme

Choose one of the following options:

**Option A: Install an existing theme**

```bash
# Browse themes at https://themes.gohugo.io/
# Example with a popular theme:
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
```

**Option B: Create a custom theme**

```bash
hugo new theme <THEMENAME>
```

### 3. Configure Your Site

Edit `hugo.toml` and set the theme property:

```toml
theme = "your-theme-name"
```

### 4. Create Content

```bash
# Create a new post
hugo new content posts/my-first-post.md

# Create a new page
hugo new content about.md
```

### 5. Start Development Server

```bash
hugo server --buildDrafts
```

Your site will be available at `http://localhost:1313`

## Development Workflow

### Creating Content

- **Posts**: `hugo new content posts/post-name.md`
- **Pages**: `hugo new content page-name.md`
- **Custom sections**: `hugo new content <section>/<filename>.md`

### Building for Production

```bash
# Build the site (output goes to ./public/)
hugo

# Build with minification
hugo --minify
```

### Project Structure

```
badbayou/
├── archetypes/          # Content templates
├── assets/              # Global assets (images, CSS, JS)
├── content/             # Your content files
├── data/                # Data files (JSON, YAML, TOML)
├── layouts/             # Custom layout templates
├── static/              # Static files (copied as-is)
├── themes/              # Hugo themes
├── hugo.toml            # Site configuration
├── shell.nix            # Nix development environment
└── README.md            # This file
```

## Available Commands

When in the Nix shell, you have access to:

- `hugo version` - Check Hugo version
- `hugo server` - Start development server with live reload
- `hugo server --buildDrafts` - Include draft content in development
- `hugo` - Build the static site
- `hugo --minify` - Build with minification
- `hugo new content <path>` - Create new content

## Configuration

The main configuration file is `hugo.toml`. Key settings include:

```toml
baseURL = 'https://your-domain.com'
languageCode = 'en-us'
title = 'Your Site Title'
theme = 'your-theme-name'

[params]
  # Theme-specific parameters
```

## Deployment

The built site (in the `./public/` directory) can be deployed to any static hosting service:

- **Netlify**: Connect your Git repository
- **Vercel**: Import your project
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload the `public/` folder
- **Any web server**: Upload the `public/` folder contents

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Themes](https://themes.gohugo.io/)
- [Hugo Community](https://discourse.gohugo.io/)
- [Markdown Guide](https://www.markdownguide.org/)

## License

This project is licensed under the WTFPL License - see the [LICENSE](LICENSE) file for details.
