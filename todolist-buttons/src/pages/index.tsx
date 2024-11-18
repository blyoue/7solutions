import ToDoButton from "./todobutton";
import { useState } from 'react';
import itemType from "./itemtype";

const buttonList: itemType[] = [
  {
      type: 'Fruit',
      name: 'Apple',
  },
  {
      type: 'Vegetable',
      name: 'Broccoli',
  },
  {
      type: 'Vegetable',
      name: 'Mushroom',
  },
  {
      type: 'Fruit',
      name: 'Banana',
  },
  {
      type: 'Vegetable',
      name: 'Tomato',
  },
  {
      type: 'Fruit',
      name: 'Orange',
  },
  {
      type: 'Fruit',
      name: 'Mango',
  },
  {
      type: 'Fruit',
      name: 'Pineapple',
  },
  {
      type: 'Vegetable',
      name: 'Cucumber',
  },
  {
      type: 'Fruit',
      name: 'Watermelon',
  },
  {
      type: 'Vegetable',
      name: 'Carrot',
  },
]


export default function Home() {
  const [itemList, setItemList] = useState(buttonList);
  const [vList, setVList] = useState<itemType[]>([]);
  const [fList, setFList] = useState<itemType[]>([]);
  
  function handleAdd(item: itemType) {
    setItemList((prev) => prev.filter(oldItem => oldItem.name !== item.name))

    if (item.type === 'Vegetable') {
      setVList((prev) => [...prev, item])
    } else if (item.type === 'Fruit') {
      setFList((prev) => [...prev, item])
    }
  }

  function handleRemove(item: itemType) {
    if (item.type === 'Vegetable') {
      setVList((prev) => prev.filter(oldItem => oldItem.name !== item.name))
    } else if (item.type === 'Fruit') {
      setFList((prev) => prev.filter(oldItem => oldItem.name !== item.name))
    }
    setItemList((prev) => [...prev, item])
  }

  return (
    <div className="min-h-screen bg-white w-2/3 mx-auto my-10 flex p-6">
      <div className="flex flex-col w-1/3 mx-6">
        <ul>
          {itemList.map((item) => {
            return (<ToDoButton item={item} onAdd={handleAdd} key={item.name} />)
          })}
        </ul>
      </div>
      <div className="w-2/3 flex">
        <div className="w-1/2 border-2 border-neutral-300 mx-2 flex flex-col items-center">
          <div className="w-full bg-zinc-200">
            <h1 className="text-center py-4 text-2xl font-bold">Fruit</h1>
          </div>
          <ul className="w-full p-4">
            {fList.map((item) => {
              return (<ToDoButton item={item} onRemove={handleRemove} key={item.name}/>)
            })}
          </ul>
        </div>
        <div className="w-1/2 border-2 border-neutral-300 mx-2 flex flex-col items-center">
          <div className="w-full bg-zinc-200">
            <h1 className="text-center py-4 text-2xl font-bold">Vegetable</h1>
          </div>
          <ul className="w-full p-4">
            {vList.map((item) => {
              return (<ToDoButton item={item} onRemove={handleRemove} key={item.name}/>)
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
