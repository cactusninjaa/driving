
type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TitleProps = {
    level?: HeadingLevel;
    size?: TitleSize;
    children: React.ReactNode
}

export const Title = ({ level = 'h1', size = 'md', children }: TitleProps) => {
    const Heading = level;
    
    const sizeClasses = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-xl',
        xl: 'text-3xl',
    };
  
    return (
        <Heading className={`font-bold ${sizeClasses[size]}`}>
        {children}
        </Heading>
    );
};