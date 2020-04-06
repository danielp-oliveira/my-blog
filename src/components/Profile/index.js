import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
          author
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          <h1>{title}</h1>
          <h2>{position}</h2>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>
        <p>{description}</p>
      </S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
