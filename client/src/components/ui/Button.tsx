import { cn } from '@/lib/utils'
import {cva, VariantProps}  from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { FC, ButtonHTMLAttributes, Children } from 'react'

export const buttonVariants = cva(
  'active:sclae-95 inline-flex items-center justify-conter rounded-md text-sm font-medium transition-color duration-300 focus:outline-none focus:ring-[#7E7E7E] focus:ring-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-[#F7F7F7] text-black hover:bg-[#E1E1E1]',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-2',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    }
  }
)
// for the words extends is cause it does not get proprities directly by inherit it, what ever we are passing to the button it will include what is in a default button and variant props so we can also pass a variant or size or what you declared for button
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>
{
  isLoading?: boolean
}

const Button: FC<ButtonProps> = ({className, isLoading, variant, children, size, ...props}) => {
  return ( 
    <button 
      className={cn(buttonVariants({variant, size, className}))} 
      disabled={isLoading}
      {...props}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
   </button>
  )
}

export default Button