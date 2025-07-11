import { notFound } from 'next/navigation'
import React from 'react'

interface Params {
    id: string;   
}

interface Props {
    params: Promise<Params>
}

const UserDetailPage = async ({params}:Props) => {
    const {id} = await params;
      const userId = parseInt(id, 10);

    if(userId > 10) notFound()
  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage