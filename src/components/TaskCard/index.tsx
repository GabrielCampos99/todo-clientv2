import { Pencil, Trash2 } from 'lucide-react';
import Typography from '../Typography';

const TaskCard = () => {
  const a = '';
  return (
    <div className="flex items-center text-white gap-4 px-2 bg-stone-700 rounded py-1">
      <input type="checkbox" className="h-5 w-5 cursor-pointer" />
      <div className="flex flex-col gap-1 line-clamp-1">
        <Typography
          variant="h4"
          className="font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        >
          Do Math Homework Do Math Homework Do Math Homework Math HomeworkMath
          HomeworkMath HomeworkMath HomeworkMath Homework
        </Typography>
        <Typography variant="p">Today At 16:45</Typography>
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
  );
};

export default TaskCard;
