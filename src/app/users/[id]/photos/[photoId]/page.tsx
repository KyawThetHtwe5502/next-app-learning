import React from 'react'

interface Params {
    id: string;
    photoId: number;
}
interface Props {
    params: Promise<Params>
}
const PhotoPage = async ({params}: Props) => {
    const {id, photoId} = await params;
  return (
    <div>PhotoPage {id} {photoId}</div>
  )
}

export default PhotoPage