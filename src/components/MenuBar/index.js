import React from "react"

import * as S from "./styled"

import Icons from "./Icons"
import { actions, links } from "./content"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      {links.map((link, i) => {
        const Icon = Icons[link.icon]

        return (
          <S.MenuBarLink to={link.url} title={link.title} key={i}>
            <S.MenuBarItem>
              <Icon />
            </S.MenuBarItem>
          </S.MenuBarLink>
        )
      })}
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      {actions.map((action, i) => {
        const Icon = Icons[action.icon]

        return (
          <S.MenuBarItem title={action.title} key={i}>
            <Icon />
          </S.MenuBarItem>
        )
      })}
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
