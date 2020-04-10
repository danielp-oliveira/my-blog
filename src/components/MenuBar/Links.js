import React from "react"
import Icons from "./Icons"

import * as S from "./styled"

const Links = () => {
  const links = [
    {
      icon: "Home",
      title: "Voltar para Home",
      url: "/",
    },
    {
      icon: "Search",
      title: "Pesquisar",
      url: "/search/",
    },
  ]

  return links.map((link, i) => {
    const Icon = Icons[link.icon]

    return (
      <S.MenuBarLink
        to={link.url}
        title={link.title}
        key={i}
        cover
        direction="right"
        bg="#16202c"
        duration={0.6}
      >
        <S.MenuBarItem>
          <Icon />
        </S.MenuBarItem>
      </S.MenuBarLink>
    )
  })
}

export default Links
