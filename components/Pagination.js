import Link from 'next/link'

export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`
  const btnClass = 'relative block rounded py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-2 hover:bg-gray-200 cursor-pointer'
  const activeClass = 'relative block rounded py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-2 bg-gray-200 cursor-not-allowed'

  if (numPages === 1) return <></>

  return (
    <div className='mt-6'>
      <ul className='flex pl-0 list-none my-2'>
        {!isFirst && (
          <Link href={prevPage}>
            <li className={btnClass}>
              Previous
            </li>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <>
          {
            currentPage === i + 1 ? (
              <li className={activeClass}>
                {i + 1}
              </li>
            ) : (
              <Link href={`/blog/page/${i + 1}`}>
                <li className={btnClass}>
                  {i + 1}
                </li>
              </Link>
            )
          }
          </>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li className={btnClass}>
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  )
}
