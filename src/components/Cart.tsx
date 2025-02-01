import { LuShoppingCart } from "react-icons/lu";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Popover>
        <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
          <button
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <LuShoppingCart fontSize={20} />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              2
            </div>
          </button>
        </PopoverButton>
        <PopoverPanel
          transition
          anchor="bottom"
          className="mt-2 divide-y divide-white/5 rounded-xl bg-indigo-500/80 text-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-8)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          <div className="p-3">
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Item 1</p>
              <p className="text-white/50">Item 1 description</p>
            </a>
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Item 2</p>
              <p className="text-white/50">Item 2 description</p>
            </a>
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Item 3</p>
              <p className="text-white/50">Item 3 description</p>
            </a>
          </div>
          <div className="p-3">
            <a
              className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
              href="#"
            >
              <p className="font-semibold text-white">Item 4</p>
              <p className="text-white/50">Item 4 description</p>
            </a>
          </div>
          <div className="p-3">
            <button className="bg-indigo-800 text-white rounded-lg py-2 px-3">
              <NavLink to="/cart">View All Items</NavLink>
            </button>
          </div>
        </PopoverPanel>
      </Popover>
    </>
  );
};

export default Cart;
