import Typography from '../Typography';
import { intlFormatDate } from '../../utils/date/intlFormatDate';
import { ITask } from '../../types/schemas/task/task';

type TaskCardProps = {
  task: Partial<ITask>;
  options?: React.ReactNode;
};
const TaskCard = (props: TaskCardProps) => {
  const { task, options } = props;
  return (
    <div>
      <div className="flex items-center text-white gap-4 px-2 bg-stone-700 rounded py-1">
        <input type="checkbox" className="h-5 w-5 cursor-pointer" />
        <div className="flex flex-col gap-1 line-clamp-1">
          <Typography
            variant="h4"
            className="font-bold text-ellipsis overflow-hidden whitespace-nowrap"
          >
            {task.title}
          </Typography>
          {task.description && (
            <Typography
              variant="h4"
              className="font-normal text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {task.description}
            </Typography>
          )}

          <Typography variant="p">
            {intlFormatDate({
              date: new Date(`${task.created_at}`),
              type: 'full',
            })}
          </Typography>
        </div>
        {options && options}
      </div>
    </div>
  );
};

export default TaskCard;
/*
Remover quando implementar isso no front
          <Pencil
            className="bg-neutral-800 rounded p-1 cursor-pointer hover:bg-neutral-500 transition"
            size={32}
          />
          <Trash2
            className="bg-neutral-800 rounded p-1 cursor-pointer hover:bg-neutral-500 transition"
            size={32}
          /> */
