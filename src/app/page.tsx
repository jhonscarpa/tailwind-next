export default function Home() {
  return (
    <div className="p-4 bg-slate-900 text-slate-100 h-screen">
      <h1 className="font-bold  text-3xl sm:text-5xl lg:text-6xl flex items-center gap-3 before:w-0.5 before:h-8 before:bg-sky-500 before:flex">
        Hello world
      </h1>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
      <button className="bg-sky-500 px-4 py-2 rounded-md font-medium mt-4 hover:enabled:bg-sky-600 hover:enabled:transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
        Sign in
      </button>
    </div>
  )
}
