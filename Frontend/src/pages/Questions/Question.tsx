

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../@/components/ui/accordion";

const questions = [
  {
    id: "q1",
    question: "What is the difference between let, const, and var?",
    topic: "JavaScript",
    difficulty: "Easy",
    answer:
      "let and const are block-scoped, while var is function-scoped. const cannot be reassigned, whereas let can be reassigned. var also allows redeclaration and is generally avoided in modern JavaScript.",
  },
  {
    id: "q2",
    question: "Explain the JavaScript event loop.",
    topic: "JavaScript",
    difficulty: "Medium",
    answer:
      "The event loop allows JavaScript to handle asynchronous operations despite being single-threaded. Synchronous code runs on the call stack, while asynchronous callbacks are placed into queues and executed when the call stack becomes empty.",
  },
  {
    id: "q3",
    question: "What is reconciliation in React?",
    topic: "React",
    difficulty: "Medium",
    answer:
      "Reconciliation is the process React uses to compare the previous virtual DOM with the new virtual DOM and determine the minimum set of changes required to update the real DOM.",
  },
  {
    id: "q4",
    question: "What are the different types of React hooks?",
    topic: "React",
    difficulty: "Easy",
    answer:
      "Common React hooks include useState, useEffect, useContext, useReducer, useMemo, useCallback, and useRef. Developers can also create custom hooks to reuse stateful logic.",
  },
  {
    id: "q5",
    question: "How would you design a highly scalable REST API?",
    topic: "System Design",
    difficulty: "Hard",
    answer:
      "A scalable REST API should use proper resource modeling, stateless authentication, caching, pagination, rate limiting, load balancing, database optimization, and horizontal scaling. Monitoring and well-defined error handling are also important.",
  },
  {
    id: "q6",
    question: "What is the difference between authentication and authorization?",
    topic: "Security",
    difficulty: "Easy",
    answer:
      "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access or perform.",
  },
  {
    id: "q7",
    question: "What is database sharding and when would you use it?",
    topic: "Database",
    difficulty: "Hard",
    answer:
      "Sharding splits a large dataset across multiple database instances. It can be used when a single database cannot handle the required storage, read/write traffic, or scaling requirements.",
  },
];

const Question = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
          Questions
        </h1>

        <p className="mt-1 max-w-2xl text-sm text-slate-500">
          A practice bank built from the topics you've studied. Tap a question
          to reveal the answer.
        </p>
      </div>

      <Accordion className="w-full divide-y divide-white/8">
        {questions.map((q) => (
          <AccordionItem
            key={q.id}
            value={q.id}
            className="border-b-0 py-1"
          >
            <AccordionTrigger
              className="
                group
                flex
                w-full
                items-start
                gap-4
                py-4
                text-left
                hover:no-underline
                [&>svg]:hidden
              "
            >
              <span className="flex-1 text-[14.5px] font-medium text-slate-200 cursor-pointer">
                {q.question}
              </span>

              {/* Tags */}
              <span className="hidden shrink-0 items-center gap-2 sm:flex">
                <span className="rounded-md border border-white/8 bg-white/3 px-2 py-1 text-[11px] font-medium text-slate-400">
                  {q.topic}
                </span>

                <span className="rounded-md border border-white/8 bg-white/3 px-2 py-1 text-[11px] font-medium text-slate-400">
                  {q.difficulty}
                </span>
              </span>
            </AccordionTrigger>

            {/* Answer */}
            <AccordionContent
              className="
                mb-5
                ml-8
                max-w-2xl
                text-[14px]
                leading-relaxed
                text-slate-500
              "
            >
              {q.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Question;