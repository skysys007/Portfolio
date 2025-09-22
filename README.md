# Portfolio Website

A modern, responsive portfolio website showcasing web development skills in HTML, CSS, JavaScript, and PHP.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: DOM manipulation, smooth scrolling, and hover effects
- **Contact Button**: Google Forms integration for easy contact
- **Skills Showcase**: Animated skill bars and technology icons
- **Projects Gallery**: Clean project cards with technology tags
- **SEO Friendly**: Semantic HTML structure and meta tags

## Technologies Used

- **HTML5**: Semantic markup and modern structure
- **CSS3**: Responsive design, animations, and modern layouts
- **JavaScript**: DOM manipulation, smooth scrolling, and interactive features
- **Google Forms**: External contact form integration

## Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # CSS styles and responsive design
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets (add your photos here)
├── assets/             # Additional assets
└── README.md           # This file
```

## Setup Instructions

### 1. Basic Setup (Static Website)

1. Download or clone this repository
2. Open `index.html` in your web browser
3. The website will work as a static site without PHP functionality

### 2. Google Forms Integration

1. Create a Google Form for contact inquiries
2. Get the shareable link from your Google Form
3. Update the `href` attribute in `index.html` (line 272) with your Google Forms URL
4. The button will open your Google Form in a new tab when clicked

## Customization

### Personal Information

1. **Name and Title**: Update in `index.html` (lines 13, 35-36, 49)
2. **Contact Information**: Update in `index.html` (lines 269-279)
3. **About Section**: Customize the about text in `index.html` (lines 86-98)
4. **Profile Image**: Replace the placeholder in the hero section with your photo

### Skills

1. **Add/Remove Skills**: Modify the skills grid in `index.html` (lines 119-160)
2. **Skill Levels**: Adjust the `data-width` attribute in skill bars
3. **Icons**: Change Font Awesome icons for different technologies

### Projects

1. **Project Information**: Update project cards in `index.html` (lines 168-240)
2. **Project Images**: Add your project screenshots to the `images/` folder
3. **Links**: Update GitHub and live demo links
4. **Technology Tags**: Modify the tech tags to match your projects

### Styling

1. **Colors**: Update CSS custom properties in `css/styles.css`
2. **Fonts**: Change Google Fonts import in `index.html` (line 10)
3. **Animations**: Modify animation timings and effects in `css/styles.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Optimized CSS and JavaScript
- Responsive images
- Smooth scrolling
- Lazy loading animations
- Minimal external dependencies

## Security Features

- Input sanitization in PHP
- Email validation
- XSS protection
- CSRF protection ready

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:

1. Check the browser console for JavaScript errors
2. Verify PHP is properly configured on your server
3. Ensure all file paths are correct
4. Check file permissions (especially for the logs directory)

## Future Enhancements

Potential features to add:

- Blog section
- Dark/light theme toggle
- More animations and micro-interactions
- Progressive Web App (PWA) features
- Database integration for dynamic content
- Admin panel for content management

---

**Happy coding!** 🚀
