import { Card, CardTitle } from '@/components/ui/card';
import yo from '@/yo.json';

export default function Page(props: {
  params: { qnid: string; qsid: string };
  searchParams: { reveal: 'true' };
}) {
  const { params } = props;
  const isRevealed = props.searchParams.reveal === 'true';

  const qnid = params.qnid as keyof typeof yo;
  const qsid = params.qsid as keyof typeof yo;
  const front = yo[qsid][qnid].front;
  const back = yo[qsid][qnid].back;

  return (
    <Card
      className={`
    flex flex-1 flex-col items-center justify-center m-5 md:m-20 md:mt-5 bg-slate-200
    ${isRevealed ? 'bg-green-300' : ''}
    `}
    >
      <CardTitle className={`text-3xl mb-4 text-center `}>Q{qnid}:</CardTitle>
      {isRevealed ? (
        <CardTitle className="text-5xl text-center">{back}</CardTitle>
      ) : (
        <CardTitle className="text-5xl text-center">{front}</CardTitle>
      )}
    </Card>
  );
}
