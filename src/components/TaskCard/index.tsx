import { Pencil, Trash2 } from 'lucide-react';
import Typography from '../Typography';
import { intlFormatDate } from '../../utils/date/intlFormatDate';

type TaskCardProps = {
  title: string;
  description?: string;
  created_at: string | Date;
};
const TaskCard = (props: TaskCardProps) => {
  const { title, created_at: createdAt, description } = props;
  return (
    <div className="max-w-fit">
      <div className="flex items-center text-white gap-4 px-2 bg-stone-700 rounded py-1">
        <input type="checkbox" className="h-5 w-5 cursor-pointer" />
        <div className="flex flex-col gap-1 line-clamp-1">
          <Typography
            variant="h4"
            className="font-bold text-ellipsis overflow-hidden whitespace-nowrap"
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="h4"
              className="font-normal text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {description}
            </Typography>
          )}

          <Typography variant="p">
            {intlFormatDate({ date: createdAt, type: 'full' })}
          </Typography>
        </div>
        <div className="flex gap-1">
          <Pencil
            className="bg-neutral-800 rounded p-1 cursor-pointer hover:bg-neutral-500 transition"
            size={32}
          />
          <Trash2
            className="bg-neutral-800 rounded p-1 cursor-pointer hover:bg-neutral-500 transition"
            size={32}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
