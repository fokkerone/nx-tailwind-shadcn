import React from 'react';
import { Badge } from './badge';
import { Button } from './button';
import { X, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BadgeWithButtonsProps {
  label: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning';
  size?: 'default' | 'sm' | 'lg';
  onAccept?: () => void;
  onReject?: () => void;
  onInfo?: () => void;
  className?: string;
}

/**
 * BadgeWithButtons - A customizable badge component with action buttons
 * 
 * @example
 * ```tsx
 * <BadgeWithButtons 
 *   label="Pending Approval" 
 *   variant="warning"
 *   onAccept={() => console.log('Accepted')}
 *   onReject={() => console.log('Rejected')}
 *   onInfo={() => console.log('Info clicked')}
 * />
 * ```
 */
export function BadgeWithButtons({
  label,
  variant = 'default',
  size = 'default',
  onAccept,
  onReject,
  onInfo,
  className,
}: BadgeWithButtonsProps) {
  // Map variant to background colors for the badge
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
    outline: 'text-foreground border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    success: 'bg-green-500 text-white hover:bg-green-600',
    warning: 'bg-amber-500 text-white hover:bg-amber-600',
  };

  // Map size to padding and text size
  const sizeStyles = {
    default: 'text-xs py-1 px-2',
    sm: 'text-xs py-0.5 px-1.5',
    lg: 'text-sm py-1.5 px-3',
  };

  return (
    <div className={cn(
      'inline-flex items-center rounded-full overflow-hidden',
      variantStyles[variant as keyof typeof variantStyles],
      sizeStyles[size as keyof typeof sizeStyles],
      className
    )}>
      <span className="px-2">{label}</span>
      
      <div className="flex border-l border-white/20">
        {onAccept && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-full rounded-none hover:bg-white/20 p-1"
            onClick={onAccept}
          >
            <Check className="h-3 w-3" />
            <span className="sr-only">Accept</span>
          </Button>
        )}
        
        {onReject && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-full rounded-none hover:bg-white/20 p-1 border-l border-white/20"
            onClick={onReject}
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Reject</span>
          </Button>
        )}
        
        {onInfo && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-full rounded-none hover:bg-white/20 p-1 border-l border-white/20"
            onClick={onInfo}
          >
            <AlertCircle className="h-3 w-3" />
            <span className="sr-only">Info</span>
          </Button>
        )}
      </div>
    </div>
  );
}

