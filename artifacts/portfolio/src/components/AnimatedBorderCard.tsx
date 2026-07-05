import { ReactNode } from 'react';

interface AnimatedBorderCardProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedBorderCard({ children, className = '' }: AnimatedBorderCardProps) {
  return (
    <div className={`animated-border-card ${className}`}>
      <div className="glass w-full h-full p-8 sm:p-12">
        {children}
      </div>
    </div>
  );
}
