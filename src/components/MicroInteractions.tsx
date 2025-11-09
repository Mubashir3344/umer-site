import { motion } from 'motion/react';
import { ReactNode, ButtonHTMLAttributes, ChangeEvent } from 'react';
import { Check, Loader2 } from 'lucide-react';

// Ripple Button
interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function RippleButton({ children, variant = 'primary', className = '', ...props }: RippleButtonProps) {
  const baseClasses = variant === 'primary' 
    ? 'bg-[#3B755F] text-white hover:bg-[#2d5a4a]' 
    : 'bg-white text-[#3B755F] border-2 border-[#3B755F] hover:bg-[#F9FBF9]';

  return (
    <motion.button
      className={`relative overflow-hidden px-8 py-3 rounded-full uppercase tracking-wider transition-colors ${baseClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, x: '-50%', y: '-50%' }}
        whileTap={{ scale: 4, opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

// Floating Input
interface FloatingInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function FloatingInput({ label, type = 'text', value, onChange, required = false }: FloatingInputProps) {
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <motion.input
        type={type}
        value={value}
  onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3B755F] focus:outline-none transition-colors peer"
        placeholder=" "
        required={required}
        whileFocus={{ scale: 1.01 }}
      />
      <motion.label
        className={`absolute left-4 transition-all pointer-events-none ${
          hasValue
            ? 'top-0 -translate-y-1/2 text-xs bg-white px-2 text-[#3B755F]'
            : 'top-1/2 -translate-y-1/2 text-gray-500'
        }`}
        animate={{
          top: hasValue ? 0 : '50%',
          fontSize: hasValue ? '0.75rem' : '1rem',
          color: hasValue ? '#3B755F' : '#6B7280',
        }}
      >
        {label}
      </motion.label>
    </div>
  );
}

// Success Checkmark Animation
export function SuccessCheckmark({ show }: { show: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: show ? 1 : 0 }}
      className="w-16 h-16 rounded-full bg-[#3B755F] flex items-center justify-center"
    >
      <motion.div
        initial={{ pathLength: 0 }}
        animate={{ pathLength: show ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Check className="w-10 h-10 text-white" strokeWidth={3} />
      </motion.div>
    </motion.div>
  );
}

// Loading Spinner
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <Loader2 className={`${sizeClasses[size]} text-[#3B755F]`} />
    </motion.div>
  );
}

// Hover Card
interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

export function HoverCard({ children, className = '' }: HoverCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md ${className}`}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

// Scale on Tap
export function ScaleTap({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}
