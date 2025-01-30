export function Flex({children, className}: any) {

    return (
        <div className={`flex ${className}`}>
            {children}
        </div>
    )
}
