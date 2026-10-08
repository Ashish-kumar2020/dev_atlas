import { Check } from "lucide-react";

import { Button } from "../../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "../../../@/components/ui/card";
import { Progress } from "../../../@/components/ui/progress";

const quiz = [
  {
    q: "Which queue drains completely before the next timer callback?",
    options: [
      "The macrotask queue",
      "The microtask queue",
      "The render queue",
      "The task queue",
    ],
    answer: 1,
  },
  {
    q: "What does a React key primarily control?",
    options: [
      "Render order",
      "CSS specificity",
      "Element identity between renders",
      "Prop validation",
    ],
    answer: 2,
  },
  {
    q: "Which index type supports range queries?",
    options: ["Hash", "B-tree", "Bloom filter", "Bitmap only"],
    answer: 1,
  },
  {
    q: "Under a partition, CAP forces a choice between…",
    options: [
      "Speed and cost",
      "Consistency and availability",
      "Reads and writes",
      "Latency and durability",
    ],
    answer: 1,
  },
];

const Quiz = () => {
  return (
    <div className="mx-auto max-w-xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
          Quiz
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Question 1 of {quiz.length}
        </p>
      </div>

      {/* Progress */}
      <div className="mb-8 max-w-xs">
        <Progress
          value={25}
          className="h-1.5 bg-slate-800"
        />
      </div>

      {/* Question */}
      <Card className="border-white/8 bg-transparent shadow-none">
        <CardHeader className="px-0 pb-0">
          <h2 className="text-[19px] font-semibold leading-snug tracking-[-0.015em] text-slate-100">
            {quiz[0].q}
          </h2>
        </CardHeader>

        <CardContent className="px-0 pt-6">
          {/* Options */}
          <div className="space-y-2">
            {quiz[0].options.map((option, index) => {
              const isAnswer = index === quiz[0].answer;

              return (
                <Button
                  key={option}
                  variant="outline"
                  className="
                    flex
                    h-auto
                    min-h-11
                    w-full
                    items-center
                    justify-between
                    rounded-md
                    border-white/8
                    bg-[#0D151F]
                    px-4
                    py-3
                    text-left
                    text-[14px]
                    font-normal
                    text-slate-300
                    hover:border-white/15
                    hover:bg-white/4
                    hover:text-slate-200
                  "
                >
                  <span>{option}</span>

                  {isAnswer && (
                    <Check
                      className="size-4 text-emerald-400"
                      strokeWidth={2}
                    />
                  )}
                </Button>
              );
            })}
          </div>

          {/* Next Button */}
          <Button
            className="
              mt-8
              h-9
              rounded-md
              bg-blue-500
              px-4
              text-[13.5px]
              font-medium
              text-white
              hover:bg-blue-600
            "
          >
            Next question
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;