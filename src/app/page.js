import Image from "next/image";
import Addtask from "./components/Addtask";
import TodoList from "./components/TodoList";

const Home = () => {
  return (
    <main className="max-w-4xl  mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">ToDoApp</h1>
        <Addtask />
      </div>
      <TodoList />
    </main>
  );
};
export default Home;
