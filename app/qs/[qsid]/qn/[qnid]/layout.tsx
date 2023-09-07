'use client';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTimer } from 'react-timer-hook';

export default function QuestionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { qsid: string; qnid: string };
}) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);

  const { totalSeconds, isRunning, pause, resume } = useTimer({
    expiryTimestamp: time,
  });
  const router = useRouter();
  const sp = useSearchParams();
  const isRevealed = sp.get('reveal') === 'true';

  const { qsid, qnid } = params;

  const onNext = () => {
    if (qnid === '15') return router.push('/thank-you');
    const nextQnid = +qnid + 1;
    router.push(`/qs/${qsid}/qn/${nextQnid}`);
  };

  const onReveal = () => {
    if (isRevealed) {
      router.replace(`/qs/${qsid}/qn/${qnid}`);
    } else {
      router.replace(`/qs/${qsid}/qn/${qnid}/?reveal=true`);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-900 justify-between">
      <div
        onClick={() => router.back()}
        className="bg-gray-700 absolute top-3 left-3 rounded-3xl px-2 py-2 hover:bg-slate-900 duration-300"
      >
        <ArrowLeft className="text-white h-[20px]" />
      </div>
      <div className="flex flex-col w-full">
        {totalSeconds === 0 ? (
          <p className="p-4 m-8 text-center self-center justify-center text-5xl font-bold text-red-600 rounded-3xl">
            💣
          </p>
        ) : (
          <p className="p-4 m-8 text-center self-center justify-center text-5xl font-bold text-violet-800 bg-slate-300 rounded-3xl">
            {totalSeconds} secs
          </p>
        )}
        {children}
      </div>
      <aside className="flex min-h-screen bg-slate-800 p-10 w-[20%] items-center justify-between flex-col drop-shadow-2xl">
        <div className="flex flex-col gap-10">
          <Button
            variant="destructive"
            className="px-4"
            onClick={isRunning ? pause : resume}
          >
            {isRunning ? 'Stop Timer' : 'Resume Timer'}
          </Button>
          <Button variant="secondary" onClick={onReveal}>
            {isRevealed ? 'Hide Answer' : 'Reveal Answer'}
          </Button>
        </div>
        <Button
          variant="default"
          className="bg-violet-700 px-10"
          onClick={onNext}
        >
          Next
        </Button>
      </aside>
    </div>
  );
}
