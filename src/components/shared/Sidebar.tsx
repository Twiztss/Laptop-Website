import { BookOpenTextIcon, Box, CreditCard, Crown, FolderArchive, ShieldAlert, SidebarIcon, User } from "lucide-react"
import CreatableSelect from "react-select/creatable";
import makeAnimated from 'react-select/animated';
import { sampleSubCategory } from "../../data/category-data";
import { SubCategory } from "../../types/Catogory";
import { useLocation } from "react-router-dom";

const options = [
  { value: 'laptops', label: 'Laptops' },
  { value: 'display', label: 'Display' },
  { value: 'components', label: 'Components' },
  { value: 'gadgets', label: 'Gadgets' },
  { value: 'misc', label: 'Misc' },
]

const CategoryOption = () => {

    const subCategoryMenu = (item : SubCategory) => {
      return (
        <div className="flex gap-2 items-center" key={item.name}>
          <FolderArchive width={16} height={16} className="opacity-50"/>
          <p className="text-sm font-medium">{item.name}</p>
        </div>
      )
    }

    const subCategory = (item : SubCategory[]) => {
      return (
        <div className="flex flex-col gap-1" key={item[0].name}>
          <h3 className="text-sm font-semibold">{item[0].name}</h3>
          <div className="flex flex-col gap-1">
            {item.slice(1).map(subCategoryMenu)}
          </div>
        </div>
      )
    }

    return (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            {sampleSubCategory.slice(0,3).map(subCategory)}
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
            <div className="flex gap-2" key={index.label}>
              <input type="checkbox" name="" id="" />
              <p className="text-sm font-medium">{index.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ProfileOption = ({handleClick} : any) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-lg">User</p>
        <div className="flex gap-4 items-center cursor-pointer" onClick={handleClick} id="Account">
          <User color="gray" width={20} height={20} />
          <p className="font-semibold text-lg text-gray-500">Accounts</p>
        </div>
        <div className="flex gap-4 items-center cursor-pointer" onClick={handleClick} id="Payment">
          <CreditCard color="gray" width={20} height={20} />
          <p className="font-semibold text-lg text-gray-500">Payment Method</p>
        </div>
        <div className="flex gap-4 items-center cursor-pointer" onClick={handleClick} id="Subscriptions">
          <Crown color="gray" width={20} height={20} />
          <p className="font-semibold text-lg text-gray-500">Subscriptions</p>
        </div>
        <div className="flex gap-4 items-center cursor-pointer" onClick={handleClick} id="Orders">
          <Box color="gray" width={20} height={20} />
          <p className="font-semibold text-lg text-gray-500">Orders</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-lg">Settings</p>
        <div className="flex gap-4 items-center cursor-pointer" onClick={handleClick} id="Account">
          <BookOpenTextIcon color="gray" width={20} height={20}/>
          <p className="font-semibold text-lg text-gray-500">Preferences</p>
        </div>
        <div className="flex gap-4 items-center cursor-pointer" onClick={handleClick} id="Account">
          <ShieldAlert color="gray" width={20} height={20} />
          <p className="font-semibold text-lg text-gray-500">Privacy</p>
        </div>
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
          <CategoryOption />
          <Filter />
        </section>
      )
    } else if (url == "/profile") {
      // p-8
      component = (
        <section className="flex flex-col gap-6 p-8">
          <h1 className="text-2xl font-bold">Profile</h1>
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
