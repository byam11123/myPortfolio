/* MobileMenu.tsx — React island for mobile hamburger navigation */
import { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        id="mobile-menu-toggle"
        onClick={toggle}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '5px',
          width: '40px',
          height: '40px',
          padding: '8px',
          background: isOpen ? 'var(--color-coral)' : 'var(--color-surface)',
          border: '3px solid var(--color-border)',
          boxShadow: isOpen ? 'none' : '3px 3px 0 var(--color-border)',
          cursor: 'pointer',
          transform: isOpen ? 'translate(3px, 3px)' : 'none',
          transition: 'all 80ms ease-out',
        }}
      >
        <span
          style={{
            display: 'block',
            width: '100%',
            height: '3px',
            background: 'var(--color-border)',
            transition: 'all 80ms ease-out',
            transformOrigin: 'center',
            transform: isOpen ? 'translateY(8px) rotate(45deg)' : 'none',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '100%',
            height: '3px',
            background: 'var(--color-border)',
            transition: 'all 80ms ease-out',
            opacity: isOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: 'block',
            width: '100%',
            height: '3px',
            background: 'var(--color-border)',
            transition: 'all 80ms ease-out',
            transformOrigin: 'center',
            transform: isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      {/* Full-screen Overlay */}
      {isOpen && (
        <div
          id="mobile-menu-overlay"
          style={{
            position: 'fixed',
            top: '4rem',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--color-bg)',
            borderTop: '3px solid var(--color-border)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            padding: '1.5rem',
            gap: '0.5rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                color: 'var(--color-text)',
                padding: '1rem 1.25rem',
                border: '3px solid var(--color-border)',
                boxShadow: '4px 4px 0 var(--color-border)',
                background: 'var(--color-surface)',
                transition: 'all 80ms ease-out',
              }}
              onMouseDown={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'translate(4px, 4px)';
                target.style.boxShadow = 'none';
              }}
              onMouseUp={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'none';
                target.style.boxShadow = '4px 4px 0 var(--color-border)';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
