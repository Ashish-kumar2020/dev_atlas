import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

import { Badge } from "../../../@/components/ui/badge";
import { Button } from "../../../@/components/ui/button";
import { Textarea } from "../../../@/components/ui/textarea";

const questions = [
  {
    question: "What is the difference between authentication and authorization?",
    topic: "Security",
    difficulty: "Easy",
    answer:
      "Authentication verifies the identity of a user, while authorization determines what resources or actions that authenticated user is allowed to access.",
  },
  {
    question: "Explain the JavaScript event loop.",
    topic: "JavaScript",
    difficulty: "Medium",
    answer:
      "The event loop allows JavaScript to handle asynchronous operations. Synchronous code runs on the call stack, while asynchronous callbacks wait in queues and are moved to the stack when it becomes available.",
  },
  {
    question: "What is reconciliation in React?",
    topic: "React",
    difficulty: "Medium",
    answer:
      "Reconciliation is the process React uses to compare the previous and new virtual DOM trees and determine the minimum changes required to update the actual DOM.",
  },
  {
    question: "How would you design a highly scalable REST API?",
    topic: "System Design",
    difficulty: "Hard",
    answer:
      "A scalable REST API should use proper resource modeling, stateless authentication, caching, pagination, rate limiting, load balancing, database optimization, horizontal scaling, monitoring, and proper error handling.",
  },
];

const InterviewMode = () => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const current = questions[index % questions.length];

  useEffect(() => {
    if (submitted) return;

    const timer = setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  const handleNext = () => {
    setIndex((value) => value + 1);
    setAnswer("");
    setSubmitted(false);
    setSeconds(0);
  };

  const handleClear = () => {
    setAnswer("");
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
          Interview mode
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          One question at a time. No distractions.
        </p>
      </div>

      {/* Question Meta */}
      <div className="flex items-center gap-2">
        <Badge
          variant="outline"
          className="border-white/8 bg-white/3 text-[11px] font-medium text-slate-400"
        >
          {current.topic}
        </Badge>

        <Badge
          variant="outline"
          className="border-white/8 bg-white/3 text-[11px] font-medium text-slate-400"
        >
          {current.difficulty}
        </Badge>

        <div className="ml-auto flex items-center gap-1.5 text-[12.5px] font-medium tabular-nums text-slate-400">
          <Clock className="size-3.5" strokeWidth={1.75} />
          {minutes}:{remainingSeconds}
        </div>
      </div>

      {/* Question */}
      <h2 className="mt-6 text-[21px] font-semibold leading-snug tracking-[-0.02em] text-slate-100">
        {current.question}
      </h2>

      {/* Answer */}
      <Textarea
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        placeholder="Talk through your answer…"
        className="
          mt-6
          min-h-52
          resize-y
          rounded-lg
          border-white/8
          bg-[#0D151F]
          p-4
          text-[14.5px]
          leading-relaxed
          text-slate-300
          placeholder:text-slate-600
          focus-visible:border-blue-500/50
          focus-visible:ring-blue-500/15
        "
      />

      {/* Actions */}
      <div className="mt-4 flex items-center gap-2">
        {!submitted ? (
          <Button
            onClick={() => setSubmitted(true)}
            className="
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
            Submit answer
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="
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
        )}

        <Button
          variant="outline"
          onClick={handleClear}
          className="
            h-9
            rounded-md
            border-white/8
            bg-[#0D151F]
            px-4
            text-[13.5px]
            font-medium
            text-slate-300
            hover:bg-white/4
            hover:text-slate-200
          "
        >
          Clear
        </Button>
      </div>

      {/* Model Answer */}
      {submitted && (
        <section className="mt-10 border-t border-white/8 pt-6">
          <p className="text-[11.5px] font-medium uppercase tracking-widest text-slate-500">
            Model answer
          </p>

          <p className="mt-3 text-[14.5px] leading-relaxed text-slate-400">
            {current.answer}
          </p>
        </section>
      )}
    </div>
  );
};

export default InterviewMode;