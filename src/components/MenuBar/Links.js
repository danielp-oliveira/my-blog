import Icons from "./Icons"
import { links } from "./content"

const Links = () => {
  return links.map((link, i) => {
    const Icon = Icons[link.icon]

    return (
      <S.MenuBarLink to={link.url} title={link.title} key={i}>
        <S.MenuBarItem>
          <Icon />
        </S.MenuBarItem>
      </S.MenuBarLink>
    )
  })
}

export default Links
