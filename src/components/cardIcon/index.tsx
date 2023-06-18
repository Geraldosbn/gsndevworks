import { ContentIcon } from './styled'

export interface CardIconProps {
  icon: React.ReactNode
  label?: string
}

export const CardIcon = ({ icon, label }: CardIconProps) => {
  return (
    <ContentIcon>
      {icon}
      {label && <p>{label}</p>}
    </ContentIcon>
  )
}
