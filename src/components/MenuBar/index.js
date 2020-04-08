import React from "react"

import * as S from "./styled"

import MenuBarActions from "./Actions"
import MenuBarLinks from "./Links"

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
