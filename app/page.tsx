import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-900 flex-col items-center p-10 md:p-24">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-slate-200 mb-4">
        MAD GAB
      </h1>
      <h2 className="text-md font-normal tracking-tight text-slate-200 mb-4">
        - by ACE SEA PEE DEE
      </h2>
      <div className="grid grid-cols-2">
        {Object.values(QUESTIONS_SET).map((value) => (
          <CardLink value={value} key={value.id} />
        ))}
      </div>
    </main>
  );
}

const CardLink = ({ value }: { value: { id: string; by: string } }) => (
  <Link href={`/qs/${value.id}`}>
    <Card className="shadow-2xl bg-slate-200 m-2 p-4 md:px-8 md:py-6 md:m-4">
      <CardTitle className="pb-2 text-xl">Question set {value.id}</CardTitle>
      <CardDescription className="pt-2">By: {value.by}</CardDescription>
    </Card>
  </Link>
);

const QUESTIONS_SET = [
  { id: '1', by: 'K' },
  { id: '2', by: 'D' },
  { id: '3', by: 'A' },
  { id: '4', by: 'G' },
  { id: '5', by: 'J' },
  { id: '6', by: 'C' },
];
