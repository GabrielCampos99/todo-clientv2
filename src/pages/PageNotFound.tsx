import Button from '../components/Button';
import Typography from '../components/Typography';

const PageNotFound = () => (
  <section className=" h-screen flex items-center">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <Typography
          variant="h1"
          className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-slate-200"
        >
          404
        </Typography>
        <Typography
          variant="p"
          className="mb-4 text-3xl tracking-tight font-bold text-white"
        >
          Opsss... Algo de errado aconteceu.
        </Typography>
        <Typography variant="p" className="mb-4 text-lg text-white">
          Desculpe, não conseguimos encontrar essa página. Você encontrará
          muitas coisas interessantes na página inicial para explorar.
        </Typography>
        <Button to="/">Voltar para a página inicial</Button>
      </div>
    </div>
  </section>
);

export default PageNotFound;
