type IntlFormatDateProps = {
  date: string | Date;
  type?: 'full' | 'long' | 'medium' | 'short';
};

export const intlFormatDate = (props: IntlFormatDateProps): string => {
  const { date, type = 'full' } = props;
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: type,
  }).format(new Date(date));
};
