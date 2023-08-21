import Link from 'next/link'
import Header from '@/components/Header'
import { getTasks } from '@/lib/routes'

export default async function Home() {
  const tasks = await getTasks()
  console.log(tasks)

  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <div>HelpRat App</div>
      <Link href="/login">
        <button className="m-8 rounded-md bg-neutral-700 p-4 text-neutral-100 hover:bg-accent">
          Go to Login
        </button>
      </Link>
      <div className="m-6 flex items-center justify-center">
        <div className="max-w-3xl rounded bg-neutral-400 px-6 py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio
          facilisis mauris sit amet. Imperdiet proin fermentum leo vel orci
          porta. Tincidunt vitae semper quis lectus nulla at. Eget aliquet nibh
          praesent tristique magna sit. Euismod nisi porta lorem mollis aliquam
          ut porttitor leo a. Ultricies lacus sed turpis tincidunt id aliquet
          risus. Viverra orci sagittis eu volutpat. Vitae suscipit tellus mauris
          a diam maecenas. Sed lectus vestibulum mattis ullamcorper velit sed
          ullamcorper. Massa enim nec dui nunc mattis enim ut tellus elementum.
          Sed enim ut sem viverra aliquet eget sit. Diam vulputate ut pharetra
          sit amet.
        </div>
      </div>
    </main>
  )
}
