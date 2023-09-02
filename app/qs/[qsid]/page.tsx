'use client';

import { Button } from '@/components/ui/button';

import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { qsid: string } }) {
  const qsid = params.qsid;
  const router = useRouter();

  return (
    <main className="flex min-h-screen bg-slate-600 flex-col items-center justify-center">
      <Button
        onClick={() => router.push(`/qs/${qsid}/qn/1`)}
        className="p-20 rounded-3xl scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-slate-200 mb-4"
      >
        Start game
      </Button>
    </main>
  );
}
