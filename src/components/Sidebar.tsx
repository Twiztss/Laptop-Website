import { FolderArchive, SidebarIcon } from "lucide-react"
import CreatableSelect from "react-select/creatable";
import makeAnimated from 'react-select/animated';

const options = [
  { value: 'laptops', label: 'Laptops' },
  { value: 'display', label: 'Display' },
  { value: 'components', label: 'Components' },
  { value: 'gadgets', label: 'Gadgets' },
  { value: 'misc', label: 'Misc' },
]

const Category = () => {

    const subCategory = () => {
      return (
        <div className="flex gap-2 items-center">
          <FolderArchive width={16} height={16} className="opacity-50"/>
          <p className="text-sm font-medium">Sub-Category 1</p>
        </div>
      )
    }

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-sm text-gray-500">Category</h2>
            <div className="flex flex-col gap-1">
              {subCategory()}
              {subCategory()}
              {subCategory()}
              {subCategory()}
            </div>
        </div>  
    )
}

const animatedComponents = makeAnimated();

const Filter = () => {

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Filter</h2>
      <hr className="border-1"/>
      <CreatableSelect
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[options[4], options[5]]}
      isMulti
      options={options}
      />
      <div className="flex flex-col gap-2">
        {options.map((index) => {
          return (
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <p className="text-sm font-medium">{index.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className='flex flex-col border-gray-100 border-2 border-t-0 px-12 py-6 gap-6 w-1/5 h-full overflow-hidden'>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Products</h1>
        <SidebarIcon color="gray" className="cursor-pointer"/>
      </div>
      <hr className="border-1"/>
      <Category />
      <Category />
      <Filter />
    </aside>
  )
}
