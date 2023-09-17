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
      className={`flex gap-4 flex-col h-[75vh] justify-between items-center pb-7 max-w-7xl m-auto overflow-y-auto ${taskClassName}`}
    >
      <div className="flex gap-4 flex-col w-full">{data.map(render)}</div>
      {!!totalPages && totalPages > 0 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default TasksList;
