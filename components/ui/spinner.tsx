import { Loader } from "lucide-react";

// Import cva (class variance authority) for creating CSS class utilities and managing class names based on variants.
// Import type VariantProps for TypeScript support, allowing strong typing of variant props.
import { cva, type VariantProps } from "class-variance-authority";

// Import a custom utility function cn (className) from a local utilities module to compose class names easily.
import { cn } from "@/lib/utils";


const spinnerVariants = cva(
    "text-muted-foreground animate-spin",
    {
        variants: {
            size:{
                default: "h-4 w-4",
                sm: "h-2 w-2",
                lg: "h-6 w-6",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            size: "default",
        },
    },
);

// Define a TypeScript interface for SpinnerProps, extending VariantProps to include the types from spinnerVariants.
// This ensures the Spinner component accepts and correctly types the `size` variant prop.
interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner = ({
    size,
}: SpinnerProps) => {
    return(
        <Loader className={cn(spinnerVariants({size}))}/>
    );
};