import React from "react"

import * as S from "./styled"

import { Actions as MenuBarActions } from "./Actions"
import { Links as MenuBarLinks } from "./Links"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <MenuBarLinks />
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <MenuBarActions />
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
