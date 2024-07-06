# Kia Ghods' Personal Website

This is the repository for my personal website, which is hosted at [kiaghods.com](https://kiaghods.com). The website showcases my projects, research, and contact information.

## Structure

The website is structured as follows:

- **_pages/**: Contains individual pages such as the main landing page and coursework page.
  - **index.md**: Main landing page.
  - **courses.md**: Coursework page.
- **_portfolio/**: Contains individual project pages.
- **_layouts/**: Contains the layout files for the site.
  - **default.html**: Default layout for the pages.
- **assets/**: Contains CSS styles, JavaScript files, and media.
  - **css/**: Contains CSS styles.
    - **main.css**: Main stylesheet.
  - **js/**: Contains JavaScript files.
    - **main.js**: Main JavaScript file.
  - **media/**: Contains images and icons.
    - **favicon_io/**: Contains favicon files.
- **_config.yml**: Jekyll configuration file.
- **Gemfile**: Ruby dependencies for the project.
- **Gemfile.lock**: Lock file for Ruby dependencies.
- **CNAME**: Custom domain configuration for GitHub Pages.
- **.github/workflows/deploy.yml**: GitHub Actions workflow for automatic deployment.

## Installation

To run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/kiaghods-website.git
    cd kiaghods-website
    ```

2. Install the dependencies:
    ```bash
    bundle install
    ```

3. Build the site and make it available on a local server:
    ```bash
    bundle exec jekyll serve
    ```

4. Open your web browser and navigate to `http://localhost:4000` to view the website.

## Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. On every push to the `main` branch, the site is built and the contents of the `_site` directory are pushed to the `gh-pages` branch.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please reach out via:
- Email: [kia.ghods@princeton.edu](mailto:kia.ghods@princeton.edu)

If you use this, please star the repository or provide feedback!
