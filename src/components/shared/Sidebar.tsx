import { BookOpenTextIcon, Box, CreditCard, Crown, FolderArchive, ShieldAlert, SidebarIcon, User } from "lucide-react"
import { sampleSubCategory } from "../../data/category-data";
import { SubCategory } from "../../types/Catogory";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const CategoryOption = () => {
  const subCategoryMenu = (item: SubCategory) => (
    <button
      className="flex gap-2 items-center rounded-md px-2 py-1 transition-colors duration-200 cursor-pointer hover:bg-gray-100 hover:shadow-sm focus:bg-gray-200 w-full text-left"
      key={item.name}
      tabIndex={0}
      aria-label={`Navigate to ${item.name} category`}
    >
      <FolderArchive width={16} height={16} className="opacity-50" />
      <span className="text-sm font-medium">{item.name}</span>
    </button>
  );

  const subCategory = (item: SubCategory[]) => (
    <div className="flex flex-col gap-1" key={item[0].name}>
      <h3 className="text-sm font-semibold text-gray-700 mb-1">{item[0].name}</h3>
      <nav className="flex flex-col gap-1" aria-label={`${item[0].name} subcategories`}>
        {item.slice(1).map(subCategoryMenu)}
      </nav>
    </div>
  );

  return (
    <nav className="flex flex-col gap-4" aria-label="Product categories">
      <div className="flex flex-col gap-2">
        {sampleSubCategory.slice(0, 3).map(subCategory)}
      </div>
    </nav>
  );
};

const ProfileOption = ({ handleClick }: any) => (
  <nav className="flex flex-col gap-8" aria-label="Profile navigation">
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-lg text-gray-900">User</h2>
      <div className="flex flex-col gap-1">
        <button 
          className="flex gap-4 items-center rounded-md px-2 py-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100 focus:bg-gray-200 w-full text-left" 
          onClick={handleClick} 
          id="Account" 
          tabIndex={0}
          aria-label="Navigate to Account settings"
        >
          <User color="gray" width={20} height={20} />
          <span className="font-semibold text-lg text-gray-500">Accounts</span>
        </button>
        <button 
          className="flex gap-4 items-center rounded-md px-2 py-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100 focus:bg-gray-200 w-full text-left" 
          onClick={handleClick} 
          id="Payment" 
          tabIndex={0}
          aria-label="Navigate to Payment settings"
        >
          <CreditCard color="gray" width={20} height={20} />
          <span className="font-semibold text-lg text-gray-500">Payment Method</span>
        </button>
        <button 
          className="flex gap-4 items-center rounded-md px-2 py-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100 focus:bg-gray-200 w-full text-left" 
          onClick={handleClick} 
          id="Subscriptions" 
          tabIndex={0}
          aria-label="Navigate to Subscriptions"
        >
          <Crown color="gray" width={20} height={20} />
          <span className="font-semibold text-lg text-gray-500">Subscriptions</span>
        </button>
        <button 
          className="flex gap-4 items-center rounded-md px-2 py-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100 focus:bg-gray-200 w-full text-left" 
          onClick={handleClick} 
          id="Orders" 
          tabIndex={0}
          aria-label="Navigate to Orders"
        >
          <Box color="gray" width={20} height={20} />
          <span className="font-semibold text-lg text-gray-500">Orders</span>
        </button>
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-lg text-gray-900">Settings</h2>
      <div className="flex flex-col gap-1">
        <button 
          className="flex gap-4 items-center rounded-md px-2 py-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100 focus:bg-gray-200 w-full text-left" 
          onClick={handleClick} 
          id="Preferences" 
          tabIndex={0}
          aria-label="Navigate to Preferences"
        >
          <BookOpenTextIcon color="gray" width={20} height={20} />
          <span className="font-semibold text-lg text-gray-500">Preferences</span>
        </button>
        <button 
          className="flex gap-4 items-center rounded-md px-2 py-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100 focus:bg-gray-200 w-full text-left" 
          onClick={handleClick} 
          id="Privacy" 
          tabIndex={0}
          aria-label="Navigate to Privacy settings"
        >
          <ShieldAlert color="gray" width={20} height={20} />
          <span className="font-semibold text-lg text-gray-500">Privacy</span>
        </button>
      </div>
    </div>
  </nav>
);

export default function Sidebar({ handleClick }: any) {
  const url = useLocation().pathname;
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile sidebar toggle button */}
      <button
        className="fixed top-4 left-4 z-40 flex items-center justify-center rounded-full bg-white shadow-md p-2 border border-gray-200 md:hidden transition hover:bg-gray-100"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
        aria-expanded={open}
      >
        <SidebarIcon className="text-gray-700" />
      </button>
      
      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 z-30 bg-black bg-opacity-30 transition-opacity duration-300 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 flex flex-col w-64 min-h-screen bg-white border-r border-gray-100 shadow-lg transition-transform duration-300 md:static md:w-1/5 md:min-h-screen md:h-auto md:shadow-none md:border-r md:border-t-0 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        aria-label="Navigation sidebar"
      >
        <div className="flex flex-col h-full min-h-screen md:min-h-0">
          {url === "/products" && (
            <section className="flex flex-col gap-6 px-6 py-8 h-full">
              <header className="flex justify-between items-center flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
                <button 
                  className="md:hidden" 
                  onClick={() => setOpen(false)} 
                  aria-label="Close sidebar"
                >
                  <SidebarIcon color="gray" className="cursor-pointer" />
                </button>
              </header>
              <hr className="border-gray-200 flex-shrink-0" />
              <div className="flex-1 overflow-y-auto">
                <CategoryOption />
              </div>
            </section>
          )}
          {url === "/profile" && (
            <section className="flex flex-col gap-6 p-8 h-full">
              <header className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
              </header>
              <div className="flex-1 overflow-y-auto">
                <ProfileOption handleClick={handleClick} />
              </div>
            </section>
          )}
        </div>
      </aside>
    </>
  );
}
