export default function Home() {
  return (
    <div className="p-4 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 h-screen flex flex-col items-center text-center ">
      <div className="max-w-2xl">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl  ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </h1>
        <p className="mt-4 dark:text-slate-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          totam beatae quasi quo nisi sequi eos numquam fugit dolor laborum
          maiores mollitia accusantium nam, provident expedita ratione molestias
          aliquid nemo!
        </p>

        <button className="bg-sky-500 dark:bg-sky-400 px-4 py-2 text-white dark:text-sky-950 rounded-md font-medium mt-4 hover:enabled:bg-sky-600 hover:enabled:transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
          Sign in
        </button>
      </div>
    </div>
  )
}
