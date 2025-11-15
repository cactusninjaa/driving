type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Color = 'grey-900' | 'grey-700' | 'grey-500'

type TextProps = {
    size?: Size;
    weight?: Size;
    children: React.ReactNode;
    color?: Color;
}

export const Text = ({ size = 'md', weight = 'sm', children, color = 'grey-900'}: TextProps) => {
    const sizeClasses = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-xl',
        xl: 'text-3xl',
    };

    const fontWeightClasses = {
        xs: 'font-light',
        sm: 'font-normal',
        md: 'font-medium',
        lg: 'font-semibold',
        xl: 'font-bold',
    }

    const colorClasses = {
        'grey-900' : 'text-grey-900',
        'grey-700' : 'text-grey-700',
        'grey-500' : 'text-grey-500',
    }
  
    return (
        <p className={`font-bold ${sizeClasses[size]} ${fontWeightClasses[weight]} ${colorClasses[color]}`}>
            {children}
        </p>
    );
};