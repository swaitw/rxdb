import React from 'react';

export default function FooterWrapper() {

  const footerConfig = {
    navLinks: [
      {
        label: 'Premium',
        href: '/premium/'
      },
      {
        href: '/consulting/',
        label: 'Support',
      },
      {
        label: 'Documentation',
        href: '/quickstart.html',
      },
      {
        label: 'Discord',
        target: '_blank',
        href: '/chat/',
      },
      {
        label: 'Github',
        target: '_blank',
        href: '/code/',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/intent/user?screen_name=rxdbjs',
        target: '_blank',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/rxdb',
        target: '_blank',
      }
    ],
    communityLinks: [
      {
        label: 'Discord',
        target: '_blank',
        href: '/chat/',
        logo: '/img/community-links/discord-logo.svg',
      },
      {
        label: 'Github',
        target: '_blank',
        href: '/code/',
        logo: '/img/community-links/github-logo.svg'
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/intent/user?screen_name=rxdbjs',
        target: '_blank',
        logo: '/img/community-links/x-logo.svg',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/rxdb',
        target: '_blank',
        logo: '/img/community-links/linkedin-logo.svg',
      },
      {
        label: 'Stack Overflow',
        href: 'https://stackoverflow.com/questions/tagged/rxdb',
        target: '_blank',
        logo: '/img/community-links/stack-overflow-logo.svg',
      },
    ],
    policyLinks: [
      {
        label: 'Legal Notice',
        target: '_blank',
        href: '/legal-notice/',
      },
    ],
  };

  const rightsText = `© ${new Date().getFullYear()} RxDB. All rights reserved.`;
  return (
    <>
      {/* <Footer {...props} /> */}
      <>
        <div className='block footer'>

          <div className="footer-block">
            <div className="footer-links">
              <span>
                <a
                  variant="text"
                  href="/"
                  className="footer-logo-button"
                >
                  <img src="/files/logo/logo.svg" alt="RxDB" loading="lazy" />
                  <div>
                    RxDB
                  </div>
                </a>
                <div className="footer-community-links">
                  {footerConfig.communityLinks.map((link, index) => (
                    <a
                      key={link.href + index}
                      variant="text"
                      href={link.href}
                      target={link.target ? '_blank' : ''}
                    >
                      <img src={link.logo} alt={'RxDB ' + link.label} loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </span>
              <div className="footer-nav-links">
                {footerConfig.navLinks.map((link, index) => (
                  <a
                    variant="text"
                    href={link.href}
                    target={link.target ? '_blank' : ''}
                    key={link.href + index}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-policy">
              <div>
                {footerConfig.policyLinks.map((link, index) => (
                  <a
                    variant="text"
                    href={link.href}
                    key={link.href + index}
                    target={link.target ? '_blank' : ''}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <span className="footer-rights">{rightsText}</span>
            </div>
            <img
              className="footer-img desktop-img"
              src="/img/footer-column.svg"
              alt="columns"
              loading="lazy"
            />
          </div>
        </div>
      </>
    </>
  );
}
