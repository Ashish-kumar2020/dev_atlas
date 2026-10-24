
import { format, parseISO, isValid } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "../../../@/components/ui/button";
import { Calendar } from "../../../@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../@/components/ui/popover";
import type { DATE_PROP_TYPE } from "./task.types";

export function DateSelector({
  value,
  fieldName,
  onChange,
  error,
}: DATE_PROP_TYPE) {
  const date = value ? parseISO(value) : undefined;
  const selectedDate = date && isValid(date) ? date : undefined;

  return (
    <div className="w-full">
      <Popover>
        <PopoverTrigger
          render={
            <Button
              type="button"
              data-empty={!selectedDate}
              className="w-full justify-between border-zinc-800 bg-zinc-900 text-left font-normal text-zinc-100 hover:bg-zinc-800 hover:text-white data-[empty=true]:text-zinc-500"
            >
              {selectedDate ? (
                format(selectedDate, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
              <ChevronDownIcon className="size-4 text-zinc-400" />
            </Button>
          }
        />

        <PopoverContent
          className="w-auto border-zinc-800 bg-zinc-950 p-0 text-zinc-100"
          align="start"
        >
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(selected) => {
              onChange(
                fieldName,
                selected ? format(selected, "yyyy-MM-dd") : ""
              );
            }}
            defaultMonth={selectedDate}
            className="rounded-md bg-zinc-950 p-3 text-zinc-100"
            classNames={{
              months: "flex flex-col",
              month: "space-y-4",
              month_caption: "flex justify-center pt-1 relative items-center",
              weekdays: "flex",
              weekday: "text-zinc-500 rounded-md w-8 font-normal text-[0.8rem]",
              week: "flex w-full mt-2",
              day: "h-8 w-8 text-center text-sm p-0",
              day_button:
                "h-8 w-8 p-0 font-normal text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-md",
              today: "bg-zinc-800 text-white rounded-md",
              selected: "bg-blue-600 text-white hover:bg-blue-700 rounded-md",
              outside: "text-zinc-600 opacity-50",
              disabled: "text-zinc-600 opacity-30",
              button_previous:
                "absolute left-1 text-zinc-400 hover:bg-zinc-800 rounded-md",
              button_next:
                "absolute right-1 text-zinc-400 hover:bg-zinc-800 rounded-md",
            }}
          />
        </PopoverContent>
      </Popover>

      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}