import type { NextPage } from 'next'
import { useState } from 'react'
import Search from '../components/search'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Filter from '../components/filter'

const Home: NextPage = () => {
  const [input, setInput] = useState('')
  const [fruits, setFruits] = useState([
    { name: 'Banana', color: 'yellow' },
    { name: 'Orange', color: 'orange' },
    { name: 'Pineapple', color: 'yellow' },
    { name: 'Grapes', color: 'violet' },
    { name: 'Apple', color: 'red' },
    { name: 'Avocado', color: 'violet' },
    { name: 'Watermelon', color: 'green' },
    { name: 'Kiwi', color: 'green' },
    { name: 'Mangoes', color: 'yellow' },
  ])

  // setting the value of dropdown
  const [placeholder, setPlaceholder] = useState('Filter By')

  return (
    <div className="h-screen">
      <div className="max-w-5xl mx-auto grid grid-rows-[auto,1fr] text-center gap-5 py-2">
        {/* search and filter */}
        <h1 className="text-2xl font-bold">Fruits</h1>
        <div className="grid grid-cols-[1fr,auto] items-center gap-10">
          {/* search */}
          <Search input={input} setInput={setInput} />

          {/* filter */}
          <Filter placeholder={placeholder} setPlaceholder={setPlaceholder}/> 
        </div>

        {/* datas */}
        <div>
          {/* default */}
          {input === '' && placeholder === 'Filter By' && (
            <div className="grid gap-2 mt-10">
              {fruits.map((fruit, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr,auto] items-center border-[1px] border-gray-200 p-3 hover:bg-slate-200 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-semibold text-left">{fruit.name}</h3>
                  <span>{fruit.color}</span>
                </div>
              ))}
            </div>
          )}

          {/* seach data */}
          {input !== '' && (
            <div className="grid gap-2 mt-10">
              {fruits
                .filter((fruit) => fruit.name.toLowerCase().includes(input))
                .map((fruit, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr,auto] items-center border-[1px] border-gray-200 p-3 hover:bg-slate-200 transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="font-semibold text-left">{fruit.name}</h3>
                    <span>{fruit.color}</span>
                  </div>
                ))}
            </div>
          )}

          {/* filter data */}

          {placeholder !== 'Filter By' && (
            <div className="grid gap-2 mt-10">
              {fruits
                .filter((fruit) => placeholder === fruit.color)
                .map((fruit, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr,auto] items-center border-[1px] border-gray-200 p-3 hover:bg-slate-200 transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="font-semibold text-left">{fruit.name}</h3>
                    <span>{fruit.color}</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
