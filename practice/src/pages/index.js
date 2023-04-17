import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Welcome to home</h1>
      <p>We provide all the best service you could ever think of</p>
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
    </>
  )
}
