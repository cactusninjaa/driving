type ButtonStyle = 'fill' | 'outline' | 'ghost'

type ButtonProps = {
    children: React.ReactNode;
    style?: ButtonStyle;
}

export const Button = ({children, style = 'fill'}: ButtonProps) => {
    const buttonClasses = {
        fill: 'bg-orange-500 text-white',
        outline: 'border border-solid border-orange-500 text-black bg-none',
        ghost: 'bg-orange-200 border border-solid border-orange-500 text-orange'
    }

    return (
        <button className={`${buttonClasses[style]} rounded-lg py-3 px-12 font-semibold text-lg`}>
            {children}
        </button>
    )
}