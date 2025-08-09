# HackerBayou Hugo Theme

A minimal Hugo theme with automatic dark/light mode switching, designed for hacker groups and cybersecurity communities with a professional hacker aesthetic.

## Features

- 🌓 **Automatic Dark/Light Mode**: Respects system preferences with manual toggle
- 💻 **Hacker Aesthetic**: Terminal-inspired design with monospace fonts
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance Focused**: Minimal CSS/JS, optimized loading
- 🔍 **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Cards
- ♿ **Accessible**: WCAG compliant with proper focus states and ARIA labels
- 📝 **Blog Ready**: Built-in support for posts/news section
- 🎨 **Customizable**: Easy to customize colors and layout via CSS variables

## Installation

### Option 1: Git Submodule (Recommended)

```bash
cd your-hugo-site
git submodule add https://github.com/badbayou/hackerbayou-theme.git themes/hackerbayou
```

### Option 2: Clone

```bash
cd your-hugo-site/themes
git clone https://github.com/badbayou/hackerbayou-theme.git hackerbayou
```

### Option 3: Download

Download the theme and extract it to `themes/hackerbayou` in your Hugo site directory.

## Configuration

Add the theme to your `hugo.toml`:

```toml
theme = "hackerbayou"
```

### Example Configuration

```toml
baseURL = 'https://yourdomain.com/'
languageCode = 'en-us'
title = 'Your Hacker Group Name'
theme = 'hackerbayou'

[params]
  description = "A professional hacker group focused on cybersecurity, learning, and community."
  author = "Your Group Name"
  keywords = "cybersecurity, hacking, security, meetup, community"

  # Contact
  contact_email = "contact@yourdomain.com"

  # Call to Action
  cta_text = "Join Our Community"
  cta_link = "/about"

  # Meetup Integration
  meetup_link = "https://meetup.com/your-group"

  # Footer
  footer_text = "Hack responsibly and ethically"

  # Features
  show_recent_posts = true
  show_share_buttons = true

  # Next Meetup Info
  [params.meetup_info]
    title = "Monthly Security Workshop"
    date = "2025-10-15"
    time = "19:00 CST"
    location = "Downtown Tech Hub"
    description = "Join us for hands-on security exercises and networking."
    rsvp_link = "https://meetup.com/your-group/events/123456"

  # Social Links
  [[params.social]]
    name = "GitHub"
    url = "https://github.com/yourgroup"

  [[params.social]]
    name = "Twitter"
    url = "https://twitter.com/yourgroup"

  [[params.social]]
    name = "Discord"
    url = "https://discord.gg/yourgroup"
```

## Content Structure

### Home Page

Create `content/_index.md`:

```markdown
---
title: "Welcome to Our Hacker Community"
description: "Building a stronger cybersecurity community through education and collaboration"
---

## Who We Are

We are a community of cybersecurity professionals, ethical hackers, and technology enthusiasts dedicated to advancing knowledge in information security.

## What We Do

- Monthly meetups and workshops
- Capture The Flag (CTF) competitions
- Security research and presentations
- Networking and knowledge sharing
```

### Blog Posts

Create posts in `content/posts/`:

```markdown
---
title: "Welcome to Our New Website"
date: 2024-01-01T12:00:00-06:00
author: "Admin"
description: "Introducing our new community website and upcoming events"
tags: ["announcement", "community", "website"]
---

Welcome to our new community website! Here you'll find updates about our meetups, security research, and community news.
```

### Static Pages

Create additional pages in `content/`:

- `content/about.md` - About page
- `content/meetup.md` - Meetup information

## Customization

### Colors

The theme uses CSS custom properties for easy customization. Override them in your own CSS:

```css
:root {
  --accent-primary: #ff6b35; /* Change accent color */
  --accent-secondary: #ff8c42; /* Change secondary accent */
}
```

### Fonts

The theme uses Inter for body text and JetBrains Mono for code/terminal elements. You can override these in your CSS:

```css
body {
  font-family: "Your Font", sans-serif;
}

code,
pre,
.terminal-prompt {
  font-family: "Your Mono Font", monospace;
}
```

## Development

### Requirements

- Hugo Extended v0.112.0 or higher
- Git

### Local Development

```bash
# Clone your site
git clone your-hugo-site
cd your-hugo-site

# Add theme as submodule
git submodule add https://github.com/badbayou/hackerbayou-theme.git themes/hackerbayou

# Start development server
hugo server -D
```

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Hugo
5. Submit a pull request

## License

This theme is released under the WTFPL License. See [LICENSE](LICENSE) for details.

## Credits

- Built with [Hugo](https://gohugo.io/)
- Fonts: [Inter](https://rsms.me/inter/) and [JetBrains Mono](https://www.jetbrains.com/mono/)
- Icons: Unicode emoji for maximum compatibility

## Support

If you encounter any issues or have questions:

1. Check the [documentation](https://github.com/badbayou/hackerbayou-theme/wiki)
2. Search existing [issues](https://github.com/badbayou/hackerbayou-theme/issues)
3. Create a new issue with details about your problem

---

**Hack responsibly and ethically!** 🛡️
