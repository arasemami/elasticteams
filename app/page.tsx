import Link from 'next/link'

 
export default function Home() {
  return (
    <main className=" overflow-hidden">
  <Link href="/auth/register"><h1 className='underline text-4xl text-red-500'>Register Page</h1></Link>
    </main>
  )
}
