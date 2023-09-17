import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import { useTasks } from '../services/task/useTasks';
import TaskCard from '../components/TaskCard';
import TasksList from '../ui/lists/TasksList';
import Button from '../components/Button';
import Input from '../components/Input';

const Tasks = () => {
  const { data } = useTasks();
  const ref = useRef<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSaveFilterButton = () => {
    searchParams.set('title', ref?.current ?? '');
    setSearchParams(searchParams);
  };

  const handleSetValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    ref.current = event.currentTarget.value;
  };
  return (
    <div>
      <div className="flex gap-4 max-w-5xl m-auto pb-7">
        <Input
          type="text"
          placeholder="Pesquise por titulo"
          containerClassName="grow"
          onChange={handleSetValues}
        />
        <Button onClick={handleSaveFilterButton}>Pesquisar</Button>
      </div>
      <TasksList
        data={data?.data}
        render={(task) => (
          <TaskCard className="mx-4" task={task} key={task.id + task.title} />
        )}
        totalPages={data?.lastPage}
      />
    </div>
  );
};

export default Tasks;
