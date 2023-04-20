import { useNavigate } from 'react-router-dom';
import { ButtonStyle } from './styled';

interface ButtonProps {
    label: string
    href?: string
    to?: string
}

export const Button = ({ label, href, to }: ButtonProps) => {
    const navigate = useNavigate()

    if (href) {
        return (
            <a href={href} target="_blank" rel="noreferrer" >
                <ButtonStyle
                    children={label}
                    onClick={() => navigate(to ?? '')}
                />
            </a>
        )
    } else {
        return (
            <ButtonStyle
                children={label}
                onClick={() => navigate(to ?? '')}
            />
        )
    }
}