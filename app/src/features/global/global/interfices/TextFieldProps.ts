import { ReactNode, CSSProperties } from "react";

export type TextFieldProps = {
    children?: ReactNode;
    sx?: CSSProperties;

    "aria-invalid"?: string;
    name?: string;
    min?: string | number | undefined;
    placeholder?: string;
    fullWidth?: boolean;
    direction?: string
};