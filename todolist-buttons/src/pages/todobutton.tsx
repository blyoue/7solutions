import itemType from "./itemtype";
import { useEffect } from "react";
interface ToDoButtonProps {
    item: itemType
    onAdd?: (item: itemType) => void;
    onRemove?: (item: itemType) => void;
}


export default function ToDoButton({item, onAdd, onRemove}: ToDoButtonProps) {

    function handleClick() {
        onAdd? onAdd(item): onRemove?.(item)
    }

    useEffect(() => {
        if (onRemove) {
            const timeout = setTimeout(() => {
                onRemove(item);
              }, 5000);
              return () => {
                clearTimeout(timeout);
              };
        }
    }, [item]);

    return (
        <li className="mb-4 h-20 hover:bg-slate-100 hover:shadow-md">
            <button className="w-full h-full border-neutral-300 border-2" onClick={handleClick}>
                <h1 className="font-semibold text-xl">{item.name}</h1>
            </button>
        </li>
    )
} 