import React, { useState, useEffect } from "react"
import Icons from "./Icons"

import * as S from "./styled"

const Actions = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === "dark"
  const isListMode = display === "list"

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  const actions = [
    {
      className: theme,
      icon: "Light",
      title: "Mudar o tema",
      onClick: () => {
        window.__setPreferredTheme(isDarkMode ? "light" : "dark")
      },
    },
    {
      className: "display",
      icon: isListMode ? "Grid" : "List",
      title: "Mudar visualização",
      onClick: () => {
        window.__setPreferredDisplay(isListMode ? "grid" : "list")
      },
    },
    { icon: "Arrow", title: "Ir para o topo" },
  ]

  return actions.map((action, i) => {
    const Icon = Icons[action.icon]

    return (
      <S.MenuBarItem
        title={action.title}
        key={i}
        onClick={action.onClick}
        className={action.className}
      >
        <Icon />
      </S.MenuBarItem>
    )
  })
}

export default Actions
