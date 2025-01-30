import {TextProps} from "../types/type";

export function Text({text, className}: TextProps) {
    return (
        <div className={className}>
            {text}
        </div>
    )
}
