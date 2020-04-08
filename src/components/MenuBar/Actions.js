import Icons from "./Icons"
import { actions } from "./content"

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
