import Link from 'next/link'

export default async function Home() {

  return (
    <section>
      <h1 className='text-2xl text-slate-700 dark:text-slate-200 mb-8 border-b-2 border-blue-400'>
        Inicio
      </h1>

      <div className='pt-4'>
        <p className='mt-4'>
          Aplicación que muestra como realizar paginación desde el lado servidor.
        </p>

        <p className='mt-4'>
          La URL <span className='font-mono'>/articulos</span> acepta <span className='font-bold'>2 parámetros</span> de tipo query string también conocidos como <span className='font-bold'>searchParams</span>. Son los siguientes:
        </p>

        <ul className='list-inside list-disc font-mono'>
          <li>page</li>
          <li>limit</li>
        </ul>

        <p className='mt-4'>
          Por ejemplo:
        </p>

        <ul className='list-inside list-disc font-mono'>
          <li>/articulos?page=1&limit=10</li>
        </ul>

      </div>
    </section>
  )
}
