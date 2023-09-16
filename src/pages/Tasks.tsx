import { useTasks } from '../services/task/useTasks';
import TaskCard from '../components/TaskCard';
import TasksList from '../ui/lists/TasksList';

const Tasks = () => {
  const { data } = useTasks();

  return (
    <div>
      <TasksList
        data={data?.data}
        render={(task) => (
          <div className="m-4">
            <TaskCard task={task} key={task.id + task.title} />
          </div>
        )}
        totalPages={data?.lastPage}
      />
    </div>
  );
};

export default Tasks;
