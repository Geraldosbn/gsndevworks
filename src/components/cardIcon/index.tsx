import { ContentIcon } from './styled'

export interface CardIconProps {
  icon: React.ReactNode
  label?: string
}

const CardIcon = ({ icon, label }: CardIconProps) => {
  return (
    <ContentIcon>
      {icon}
      {label && <p>{label}</p>}
    </ContentIcon>
  )
}
export default CardIcon
