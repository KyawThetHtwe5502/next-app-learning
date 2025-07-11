import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface SearchParams {
  sortOrder: string
}

interface Props {
  searchParams: Promise<SearchParams>
}
const UserPage = async ({ searchParams }: Props) => {
  const searchParamsObj = await searchParams;
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className='btn'>new user</Link>
      <Suspense fallback={<p>loading...</p>}>
        <UserTable sortOrder={searchParamsObj.sortOrder} />
      </Suspense>
    </>
  )
}

export default UserPage