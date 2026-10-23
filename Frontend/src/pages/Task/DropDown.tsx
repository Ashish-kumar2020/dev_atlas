import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../@/components/ui/select";
import type { DROPDOWN_PROP_TYPE, ITEMS_PROPS } from "./task.types";

export const DropDown = ({ items, placeHolder }: DROPDOWN_PROP_TYPE) => {
  return (
    <Select items={items}>
      <SelectTrigger className="w-45 border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 focus:ring-blue-500">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>

      <SelectContent className="border-zinc-800 bg-zinc-950 text-zinc-100">
        <SelectGroup>
          {items.map((item: ITEMS_PROPS) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="bg-transparent! text-zinc-300! data-highlighted:bg-zinc-300! data-highlighted:text-white!"
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
