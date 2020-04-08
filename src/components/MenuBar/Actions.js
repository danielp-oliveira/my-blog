import React from "react"
import Icons from "./Icons"
import { actions } from "./content"

import * as S from "./styled"

const Actions = () => {
  return actions.map((action, i) => {
    const Icon = Icons[action.icon]

    return (
      <S.MenuBarItem title={action.title} key={i}>
        <Icon />
      </S.MenuBarItem>
    )
  })
}

export default Actions
