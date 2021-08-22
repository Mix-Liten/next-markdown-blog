import Link from 'next/link'

export default function CategoryList({ currentCategory, categories }) {
  return (
    <div className="w-full p-5 bg-white rounded-lg shadow-md mt-6">
      <h3 className="text-2xl bg-gray-800 text-white p-3 rounded">
        Blog Categories
      </h3>
      <ul className="divide-y divide-gray-300 mt-2">
        {categories.map((category, index) => (
          <>
            {currentCategory === category.toLowerCase() ? (
              <li
                key={index}
                className="p-4 bg-gray-100 cursor-not-allowed"
              >
                {category}
              </li>
            ) : (
              <Link
                key={index}
                href={`/blog/category/${category.toLowerCase()}`}
              >
                <li className="p-4 cursor-pointer hover:bg-gray-50 active:bg-gray-100">
                  {category}
                </li>
              </Link>
            )}
          </>
        ))}
      </ul>
    </div>
  )
}
