import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'champagne', 'dark'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-sm select-none focus:outline-none focus:ring-2 focus:ring-champagne/40 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-champagne text-obsidian font-semibold hover:bg-champagne-light hover:shadow-[0_0_20px_rgba(200,169,107,0.35)] active:scale-[0.98]',
    secondary:
      'bg-graphite hover:bg-graphite-light text-warm-white border border-graphite-border hover:border-champagne/40 active:scale-[0.98]',
    outline:
      'bg-transparent text-warm-white border border-border-light/30 hover:border-champagne hover:text-champagne active:scale-[0.98]',
    champagne:
      'bg-champagne-subtle text-champagne border border-champagne/30 hover:bg-champagne hover:text-obsidian active:scale-[0.98]',
    dark:
      'bg-obsidian text-warm-white border border-champagne/20 hover:border-champagne hover:bg-graphite active:scale-[0.98]',
    ghost:
      'bg-transparent text-text-muted hover:text-warm-white hover:bg-white/5 active:scale-[0.98]',
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClass}`} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${combinedClass}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      className={`group ${combinedClass}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </motion.button>
  );
};
