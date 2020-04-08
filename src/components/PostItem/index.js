import React from "react"
import PropTyles from "prop-types"

import * as S from "./styled"

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostITemTag background={background}>{category}</S.PostITemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead} min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.prototypes = {
  slug: PropTyles.string.isRequired,
  background: PropTyles.string,
  category: PropTyles.string.isRequired,
  date: PropTyles.string.isRequired,
  timeToRead: PropTyles.string.isRequired,
  title: PropTyles.string.isRequired,
  description: PropTyles.string.isRequired,
}

export default PostItem
