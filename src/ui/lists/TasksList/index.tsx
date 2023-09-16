import { ReactNode } from 'react';
import Typography from '../../../components/Typography';
import Pagination from '../../../components/Pagination';

export type TasksListProps<T> = {
  data?: T[];
  render: (item: T) => ReactNode;
  className?: string;
  totalPages?: number;
};

const TasksList = <T,>(props: TasksListProps<T>) => {
  const {
    data, render, totalPages, className
  } = props;

  if (!data || !data.length) {
    return <Typography variant="h5">Sem tarefas</Typography>;
  }

  const taskClassName = className || '';
  return (
    <div
      className={`flex flex-col min-h-[75vh] justify-between items-center max-w-7xl m-auto ${taskClassName}`}
    >
      <div className="w-full max-h-[65vh] overflow-y-auto mb-2 ">
        {data.map(render)}
      </div>
      {!!totalPages && totalPages > 0 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default TasksList;
