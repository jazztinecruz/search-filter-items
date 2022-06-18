import { ChevronDownIcon } from "@heroicons/react/solid"
import { useState } from "react"

interface IProps {
  placeholder:string
  setPlaceholder: any
}

const Filter = ({ placeholder, setPlaceholder }: IProps) => {
  // open and close dropdown
  const [open, setOpen] = useState(false)
  // for dropdown menus
  const [colors, setColors] = useState(['yellow', 'green', 'red', 'violet'])

  return (
    <div className="relative" onClick={() => setOpen(!open)}>
      <div className="grid grid-cols-[1fr,auto] items-center border-[1px] border-gray-200 px-3 py-2 ">
        <div className="w-40 text-left">{placeholder}</div>
        <ChevronDownIcon className="w-5 h-5" onClick={() => setOpen(!open)} />
      </div>

      {open && (
        <ul className="absolute top-12 w-full bg-white border-[1px] border-gray-200 grid gap-2 z-50">
          {colors.map((color, index) => (
            <li
              onClick={() => setPlaceholder(color)}
              key={index}
              className="px-3 py-2 teext-left hover:bg-slate-100 transition-all duration-300 cursor-pointer"
            >
              {color[0] + color.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Filter
