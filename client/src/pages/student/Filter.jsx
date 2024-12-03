import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'


const Category = [
  { id: 1, label: "HTML & CSS Fundamentals" },
  { id: 2, label: "JavaScript Basics" },
  { id: 3, label: "React.js Essentials" },
  { id: 4, label: "Node.js and Express Basics" },
  { id: 6, label: "Full-Stack " },
  { id: 7, label: "Docker" },
  { id: 8, label: "Java" },
  { id: 9, label: "Gsap" },
  { id: 10, label: "Three.js" },
  { id: 11, label: "Python" },
];
const Filter = ({ handleFilterChange }) => {

  const [selectedCategories, setSelectedCategories] = useState([])
  const [sortByPrice, setSortByPrice] = useState("")

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prevCatg) => {
      const newCategories = prevCatg.includes(categoryId) ? prevCatg.filter((id) => id != categoryId) : [...prevCatg, categoryId]
      handleFilterChange(newCategories, sortByPrice)
      return newCategories;
    })
  }

  const selectByPriceHandler = (selectedValue) => {
    setSortByPrice(selectedValue)
    handleFilterChange(selectedCategories, selectedValue)
  }
  return (
    <div className='w-full md:w-[20%]'>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-lg md:text-xl'>Filter Options</h1>
        <Select onValueChange={selectByPriceHandler}>
          <SelectTrigger>
            <SelectValue placeholder="sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sorty By Price</SelectLabel>
              <SelectItem value="low">Low To High</SelectItem>
              <SelectItem value="high">High To Low</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Separator className="my-4" />
      <div>
        <h1 className='font-semibold mb-2'>Category</h1>
        {Category.map((category) => (
          <div className='flex items-center space-x-2 my-2' key={category?.id}>
            <Checkbox id={category.id} onCheckedChange={() => handleCategoryChange(category.id)} />
            <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{category.label}</Label>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Filter
