import React, { useState, useEffect } from "react"
import Icons from "./Icons"

import * as S from "./styled"

const Actions = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  const actions = [
    {
      icon: "Light",
      title: "Mudar o tema",
      onClick: () => {
        window.__setPreferredTheme(isDarkMode ? "light" : "dark")
      },
    },
    { icon: "Grid", title: "Mudar visualização" },
    { icon: "Home", title: "Ir para o urlpo" },
  ]

  return actions.map((action, i) => {
    const Icon = Icons[action.icon]

    return (
      <S.MenuBarItem title={action.title} key={i} onClick={action.onClick}>
        <Icon />
      </S.MenuBarItem>
    )
  })
}

export default Actions
