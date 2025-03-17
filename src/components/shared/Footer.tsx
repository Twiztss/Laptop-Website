export default function Footer() {
  const date = new Date()

  return (
    <footer className="w-full border-t border-gray-100 bg-white px-4 py-4 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row sm:items-center md:flex-row md:justify-between">
        <h1 className="text-base font-semibold text-gray-800 transition-colors hover:text-gray-900">
          <a href="/">Laptop Website</a>
        </h1>
        <div className="flex gap-5 text-sm text-gray-500">
          <p>©{date.getFullYear()}</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}