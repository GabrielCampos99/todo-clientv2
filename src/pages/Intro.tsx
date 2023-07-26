import Carrousel from '../components/Carrousel';
import manage_your_tasks from '../assets/manage_your_tasks.png';
import create_daily_routine from '../assets/create_daily_routine.png';
import organize_your_tasks from '../assets/organize_your_tasks.png';
import Typography from '../components/Typography';

type IntroProps = {
  title: string;
  description: string;
  asset: React.ReactNode;
};
const Intro = () => {
  const introItems: IntroProps[] = [
    {
      title: 'Criar rotina diária',
      description:
        'No Uptodo, você pode criar sua rotina personalizada para se manter produtivo(a)',
      asset: <img src={create_daily_routine} alt="Logo" />,
    },
    {
      title: 'Gerenciar suas tarefas',
      description:
        'Você pode facilmente gerenciar todas as suas tarefas diárias no DoMe de forma gratuita',
      asset: <img src={manage_your_tasks} alt="Gerente" />,
    },
    {
      title: 'Organizar suas tarefas',
      description:
        'Você pode organizar suas tarefas diárias adicionando-as em categorias separadas',
      asset: <img src={organize_your_tasks} alt="Organizador" />,
    },
  ];
  return (
    <div className="m-4">
      <Carrousel
        data={introItems}
        render={(item) => (
          <div key={item.title}>
            <div className="flex items-center flex-col min-h-[50vh]">
              {item.asset}
              <Typography variant="h1">{item.title}</Typography>
              <Typography variant="h2">{item.description}</Typography>
            </div>
          </div>
        )}
        numberOfItems={introItems.length - 1}
      />
    </div>
  );
};

export default Intro;
