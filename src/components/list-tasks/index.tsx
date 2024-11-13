import ItemTask from "../item-task";

const listTodo = [
  { id: '1', nameTodo: 'Task 1' },
  { id: '2', nameTodo: 'Task 2' },
  { id: '3', nameTodo: 'Task 3' },
  { id: '4', nameTodo: 'Task 4' },
  { id: '5', nameTodo: 'Task 5' },
];

const ListTask = () => {
  return (
    <>
    <div className='container mx-auto mt-4'>
        <h2 className='flex justify-center text-xl font-semibold text-gray-700'>Task List</h2>
        <ul className='flex flex-col gap-4 mt-4'>
        {listTodo.map(task => (
                    <ItemTask key={task.id} id={task.id} taskName={task.nameTodo} />
                ))}
        </ul>
      </div>
    </>
  )
}

export default ListTask