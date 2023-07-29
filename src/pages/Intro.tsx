import Carrousel from '../components/Carrousel';
import manage_your_tasks from '../assets/manage_your_tasks.png';
import create_daily_routine from '../assets/create_daily_routine.png';
import organize_your_tasks from '../assets/organize_your_tasks.png';
import Typography from '../components/Typography';
import Button from '../components/Button';

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
      asset: (
        <img
          src={create_daily_routine}
          alt="Logo"
          className="h-[30vh] max-h-72 "
        />
      ),
    },
    {
      title: 'Gerenciar suas tarefas',
      description:
        'Você pode facilmente gerenciar todas as suas tarefas diárias no DoMe de forma gratuita',
      asset: (
        <img
          src={manage_your_tasks}
          alt="Gerente"
          className="h-[30vh] max-h-72"
        />
      ),
    },
    {
      title: 'Organizar suas tarefas',
      description:
        'Você pode organizar suas tarefas diárias adicionando-as em categorias separadas',
      asset: (
        <img
          src={organize_your_tasks}
          alt="Organizador"
          className="h-[30vh] max-h-72"
        />
      ),
    },
  ];
  return (
    <div>
      <div>
        <Button
          bgColor="bg-transparent"
          size="lg"
          className="text-slate-200"
          to="login"
        >
          <Typography variant="h4">Pular</Typography>
        </Button>
      </div>
      <Carrousel
        className="m-4"
        data={introItems}
        render={(item) => (
          <div key={item.title}>
            <div className="flex items-center flex-col h-fit">
              {item.asset}
              <Typography
                variant="h1"
                className="text-white mt-10 md:mt-20 text-2xl md:text-5xl"
              >
                {item.title}
              </Typography>
              <Typography
                variant="h2"
                className="text-white mt-6 md:mt-10 text-base md:text-2xl"
              >
                {item.description}
              </Typography>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Intro;
