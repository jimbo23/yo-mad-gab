import { Card, CardTitle } from '@/components/ui/card';
import yo from '@/yo.json';

export default function Page({
  params,
}: {
  params: { qnid: string; qsid: string };
}) {
  const qnid = params.qnid as keyof typeof yo;
  const qsid = params.qsid as keyof typeof yo;
  const front = yo[qsid][qnid].front;

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <Card className="flex flex-col items-center justify-center">
        <CardTitle className="p-40 py-44">{front}</CardTitle>
      </Card>
    </main>
  );
}
