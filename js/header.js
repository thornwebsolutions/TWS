// Header Component with Hamburger Menu
// Usage: Add <div id="header"></div> where you want the header, then include this script

function createHeader(activePage = '') {
    const header = document.getElementById('header');
    if (!header) return;

    header.innerHTML = `
    <nav>
        <div class="nav-container">
            <a href="/" class="logo">Thorn<span>Web</span></a>

            <ul class="nav-links">
                <li><a href="/#services" ${activePage === 'services' ? 'class="active"' : ''}>Services</a></li>
                <li><a href="/#pricing" ${activePage === 'pricing' ? 'class="active"' : ''}>Pricing</a></li>
                <li><a href="/blog" ${activePage === 'blog' ? 'class="active"' : ''}>Blog</a></li>
                <li><a href="/#contact" ${activePage === 'contact' ? 'class="active"' : ''}>Contact</a></li>
            </ul>

            <a href="tel:239-357-7391" class="nav-cta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span class="nav-cta-text">Call Now</span>
            </a>

            <button class="hamburger" aria-label="Toggle menu" aria-expanded="false">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>

        <div class="mobile-menu">
            <ul class="mobile-nav-links">
                <li><a href="/#services">Services</a></li>
                <li><a href="/#pricing">Pricing</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
            <a href="tel:239-357-7391" class="mobile-cta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Now
            </a>
        </div>
    </nav>
    `;

    // Hamburger menu toggle
    const hamburger = header.querySelector('.hamburger');
    const mobileMenu = header.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// Auto-initialize if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => createHeader());
} else {
    createHeader();
}
