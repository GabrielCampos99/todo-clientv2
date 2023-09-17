import { ReactNode, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
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
      className={`flex gap-4 flex-col items-center pb-7 max-w-7xl m-auto  ${taskClassName}`}
    >
      <div className="flex gap-4  flex-col w-full">{data.map(render)}</div>
      {!!totalPages && totalPages > 0 && <Pagination totalPages={totalPages} />}
    </div>
  );
};

export default TasksList;
