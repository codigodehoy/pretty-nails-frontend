export interface LinkProps {
    children: React.ReactNode;
    href: string;
    onClick: (event: React.MouseEvent) => void
    active?: boolean
}