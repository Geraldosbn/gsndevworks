import { useState } from 'react'
import * as S from './style'
import { FaSun } from 'react-icons/fa'
import Button from '../Button'
import { actions } from './actions'
import { useNavigate } from 'react-router-dom'

export default function TopBar() {
  const [open, setOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  const actionLinks = actions.map(({ label, to, href }, index) => (
    <Button
      key={index}
      children={label}
      onClick={() => navigate(to ?? '')}
      href={href}
    />
  ))

  return (
    <S.Container>
      <S.ContainerNav>{actionLinks}</S.ContainerNav>
      <S.ContainerDarkMode>
        <Button
          children={
            <FaSun
              style={{ backgroundColor: 'inherit', padding: '10px' }}
              size={20}
              onClick={() => setOpen(prevState => !prevState)}
            />
          }
        />
        {open && (
          <S.MsgDarkMode>
            Oops, we don't have Light Mode/Dark Mode ¯\_(ツ)_/¯ !
            LightMode/DarkMode everyone does it, the important thing is to solve
            your problems!
          </S.MsgDarkMode>
        )}
      </S.ContainerDarkMode>
    </S.Container>
  )
}
