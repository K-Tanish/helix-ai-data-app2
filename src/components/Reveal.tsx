import { type ReactNode, type ElementType } from 'react';
import { useReveal } from '../hooks/useReveal';

type Variant = 'up' | 'left' | 'right' | 'scale';

const classMap: Record<Variant, string> = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
  className = '',
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={`${classMap[variant]} ${inView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
