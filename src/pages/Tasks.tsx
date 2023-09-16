import TasksList from '../ui/lists/TasksList';

const Tasks = () => {
  const a = '';

  return (
    <div>
      <TasksList
        data={['item', 'item']}
        render={(item) => <div>{item}</div>}
        totalPages={10}
      />
    </div>
  );
};

export default Tasks;
