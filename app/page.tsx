import { Suspense } from "react";
import TodosList from "./(user)/todos/TodosList";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p className="text-red-500">Loading todos...</p>}>
        <h1>Loading Todos</h1>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p className="text-blue-500">Loading the shopping trolley...</p>}>
        <h1>Loading Shopping Trolley</h1>
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>
    </div>
  )
}
