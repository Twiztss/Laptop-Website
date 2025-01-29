import { Box, CreditCard, Crown, FolderArchive, SidebarIcon, User, UserCircle } from "lucide-react"
import CreatableSelect from "react-select/creatable";
import makeAnimated from 'react-select/animated';
import { sampleSubCategory } from "../data/category-data";
import { SubCategory } from "../types/Catogory";
import { useLocation } from "react-router-dom";

const options = [
  { value: 'laptops', label: 'Laptops' },
  { value: 'display', label: 'Display' },
  { value: 'components', label: 'Components' },
  { value: 'gadgets', label: 'Gadgets' },
  { value: 'misc', label: 'Misc' },
]

const CategoryOption = ({range1, range2} : any) => {

    const subCategory = (item : SubCategory) => {
      return (
        <div className="flex gap-2 items-center">
          <FolderArchive width={16} height={16} className="opacity-50"/>
          <p className="text-sm font-medium">{item.name}</p>
        </div>
      )
    }

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-sm text-gray-500">Category {range1}</h2>
            <div className="flex flex-col gap-1">
              {sampleSubCategory.slice(range1,range2).map(subCategory)}
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

const ProfileIcon = () => {
  return (
    <div className="flex w-full items-center justify-start gap-4 px-6 py-4 rounded-lg border-gray-100 border-2">
      <UserCircle height={48} width={48} className="w-1/4"/>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold">Username</h1>
        <h2 className="text-sm text-gray-400 -my-2 font-medium">Email</h2>
        <button className="mt-2 border-gray-100 border-2 px-2 py-1 rounded-md font-medium">Edit Profile</button>
      </div>
    </div>
  )
}

const ProfileOption = ({handleClick} : any) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold text-lg">User</p>
      <div className="flex gap-4 items-center cursor-pointer" onClick={handleClick} id="Account">
        <User color="gray"/>
        <p className="font-semibold text-xl text-gray-500">Accounts</p>
      </div>
      <div className="flex gap-4 items-center cursor-pointer" onClick={handleClick} id="Payment">
        <CreditCard color="gray"/>
        <p className="font-semibold text-xl text-gray-500">Payment Method</p>
      </div>
      <div className="flex gap-4 items-center cursor-pointer" onClick={handleClick} id="Subscriptions">
        <Crown color="gray"/>
        <p className="font-semibold text-xl text-gray-500">Subscriptions</p>
      </div>
      <div className="flex gap-4 items-center cursor-pointer" onClick={handleClick} id="Orders">
        <Box color="gray"/>
        <p className="font-semibold text-xl text-gray-500">Orders</p>
      </div>
    </div>
  )
}

export default function Sidebar({ handleClick } : any) {

  const url = useLocation().pathname

  const PageComponent = (url : string) => {
    
    let component

    if (url == "/products") {
      // px-12 py-6
      component =  (
        <section className="flex flex-col gap-6 px-12 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{(url.slice(1,url.length).toUpperCase())}</h1>
            <SidebarIcon color="gray" className="cursor-pointer"/>
          </div>
          <hr className="border-1"/>
          <CategoryOption range1={0} range2={4} />
          <CategoryOption range1={4} range2={8} />
          <Filter />
        </section>
      )
    } else if (url == "/profile") {
      // p-8
      component = (
        <section className="flex flex-col gap-6 px-8 py-4">
          <ProfileIcon />
          <ProfileOption handleClick={handleClick} />
        </section>
      )
    }

    return component
  }

  return (
    <aside className='flex flex-col border-gray-100 border-2 border-t-0 w-1/5 h-full overflow-hidden'>
      {PageComponent(url)}
    </aside>
  )
}
