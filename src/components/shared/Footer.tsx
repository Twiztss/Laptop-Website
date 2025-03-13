export default function Footer() {
    const date = new Date()
  return (
    <footer className="flex bg-white justify-between px-10 py-5 items-center w-full relative">
      <h1 className="text-base font-semibold">Laptop Website</h1>
      <div className="flex gap-5 text-sm text-gray-400">
        <p>@{date.getFullYear()}</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}
