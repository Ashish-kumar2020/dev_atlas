import { RotateCcw } from "lucide-react";
import { useState } from "react";

import { Badge } from "../../../@/components/ui/badge";
import { Button } from "../../../@/components/ui/button";
import { Checkbox } from "../../../@/components/ui/checkbox";

const initialCards = [
  {
    id: "1",
    front: "What is the difference between let, const, and var?",
    deck: "JavaScript · Fundamentals",
    reviewed: false,
  },
  {
    id: "2",
    front: "Explain the JavaScript event loop.",
    deck: "JavaScript · Async",
    reviewed: false,
  },
  {
    id: "3",
    front: "What is reconciliation in React?",
    deck: "React · Internals",
    reviewed: true,
  },
  {
    id: "4",
    front: "What is the difference between useMemo and useCallback?",
    deck: "React · Performance",
    reviewed: false,
  },
  {
    id: "5",
    front: "What is database sharding?",
    deck: "System Design · Database",
    reviewed: false,
  },
  {
    id: "6",
    front: "What is the difference between authentication and authorization?",
    deck: "Security · Fundamentals",
    reviewed: true,
  },
];

const Revision = () => {
  const [cards, setCards] = useState(initialCards);

  const dueCount = cards.filter((card) => !card.reviewed).length;
  const reviewedCount = cards.filter((card) => card.reviewed).length;

  const handleReview = (id: string) => {
    setCards((currentCards) =>
      currentCards.map((card) =>
        card.id === id
          ? { ...card, reviewed: !card.reviewed }
          : card,
      ),
    );
  };

  const handleReset = () => {
    setCards((currentCards) =>
      currentCards.map((card) => ({
        ...card,
        reviewed: false,
      })),
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
            Revision
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            {dueCount > 0
              ? `${dueCount} items scheduled for review.`
              : "Nothing left to review today."}
          </p>
        </div>

        <Button
          variant="outline"
          onClick={handleReset}
          className="
            h-9
            shrink-0
            gap-1.5
            rounded-md
            border-white/8
            bg-[#0D151F]
            px-3.5
            text-[13px]
            font-medium
            text-slate-300
            hover:bg-white/[0.04]
            hover:text-slate-200
          "
        >
          <RotateCcw className="size-3.5" strokeWidth={1.75} />
          Reschedule all
        </Button>
      </div>

      {/* Summary */}
      <section className="grid divide-y divide-white/8 border-y border-white/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="py-5 sm:pr-8">
          <p className="text-[12px] font-medium text-slate-500">
            Due today
          </p>

          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-100">
            {dueCount}
          </p>

          <p className="mt-1 text-[11.5px] text-slate-600">
            Waiting for review
          </p>
        </div>

        <div className="py-5 sm:px-8">
          <p className="text-[12px] font-medium text-slate-500">
            Reviewed
          </p>

          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-100">
            {reviewedCount}
          </p>

          <p className="mt-1 text-[11.5px] text-slate-600">
            Completed today
          </p>
        </div>

        <div className="py-5 sm:pl-8">
          <p className="text-[12px] font-medium text-slate-500">
            Completion
          </p>

          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-100">
            {cards.length
              ? Math.round((reviewedCount / cards.length) * 100)
              : 0}
            %
          </p>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-blue-500 transition-all"
              style={{
                width: `${
                  cards.length
                    ? (reviewedCount / cards.length) * 100
                    : 0
                }%`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Revision Queue */}
      <section>
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-slate-200">
            Revision queue
          </h2>

          <p className="mt-1 text-[12px] text-slate-600">
            Mark an item as reviewed once you are confident with it.
          </p>
        </div>

        <div className="divide-y divide-white/8 border-y border-white/8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex items-center gap-4 py-4"
            >
              {/* Checkbox */}
              <Checkbox
                checked={card.reviewed}
                onCheckedChange={() => handleReview(card.id)}
                className="
                  size-4
                  rounded-[4px]
                  border-white/20
                  data-[state=checked]:border-blue-500
                  data-[state=checked]:bg-blue-500
                "
              />

              {/* Content */}
              <div className="min-w-0 flex-1">
                <p
                  className={`text-[14px] leading-relaxed transition-colors ${
                    card.reviewed
                      ? "text-slate-600 line-through"
                      : "text-slate-300"
                  }`}
                >
                  {card.front}
                </p>

                <p className="mt-1 text-[12px] text-slate-600">
                  {card.deck}
                </p>
              </div>

              {/* Status */}
              <Badge
                variant="outline"
                className={`hidden shrink-0 rounded-md px-2 py-1 text-[10.5px] font-medium sm:inline-flex ${
                  card.reviewed
                    ? "border-emerald-500/15 bg-emerald-500/5 text-emerald-400/70"
                    : "border-blue-500/15 bg-blue-500/5 text-blue-400"
                }`}
              >
                {card.reviewed ? "Reviewed" : "Due today"}
              </Badge>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Revision;