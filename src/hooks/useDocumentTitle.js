import { useEffect } from 'react'
import { site } from '../data/site'

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.nameAr}` : `${site.nameAr} | سباكة - أصباغ - كهرباء - بلاط`
  }, [title])
}
