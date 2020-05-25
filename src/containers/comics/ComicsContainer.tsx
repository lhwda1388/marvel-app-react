import React from 'react'
import { urlForComics, hash } from '../../contants/info'
import Comics from '../../components/comics/Comics'
import Loader from '../../components/common/Loader'
import { useGetFetch } from '../../hooks/useGetFetch'

export type ComicsContainerProps = {}

function ComicsContainer(props: ComicsContainerProps) {
  const [loaded, result] = useGetFetch(urlForComics, hash)

  return <>{!loaded ? <Loader /> : <Comics comics={result} />}</>
}

export default ComicsContainer
