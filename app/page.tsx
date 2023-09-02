import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-600 flex-col items-center p-10 md:p-24">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-slate-200 mb-4">
        MAD GAB
      </h1>
      <h2 className="text-md font-normal tracking-tight text-slate-200 mb-4">
        - by ACE SEA PEE DEE
      </h2>
      <div className="grid grid-cols-2">
        {Object.values(QUESTIONS_SET).map((value) => (
          <CardLink value={value} />
        ))}
      </div>
    </main>
  );
}

const CardLink = ({ value }: { value: { id: string; by: string } }) => (
  <Link href={`/qs/${value.id}`}>
    <Card className="shadow-2xl bg-slate-200 m-2 p-4 md:px-8 md:py-6 md:m-2 ">
      <CardTitle className="pb-2 text-xl">Question set {value.id}</CardTitle>
      <CardDescription className="pt-2">by: {value.by}</CardDescription>
    </Card>
  </Link>
);

const QUESTIONS_SET = [
  { id: '1', by: 'Kiefer_1' },
  { id: '2', by: 'Kiefer_2' },
  { id: '3', by: 'Danial' },
  { id: '4', by: 'Gareth' },
  { id: '5', by: 'Jordan_1' },
  { id: '6', by: 'ZhiWei & Jordan_2' },
  { id: '7', by: 'Clement' },
  { id: '8', by: 'Aloy' },
];
