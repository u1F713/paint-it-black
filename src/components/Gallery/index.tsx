import { FC, ReactElement, ReactNode } from 'react'
import { ContentCenter } from './Gallery.styled'

interface GalleryProps {
  children: ReactNode
}

const Gallery: FC<GalleryProps> = ({ children }): ReactElement => {
  return <ContentCenter>{children}</ContentCenter>
}
export default Gallery
