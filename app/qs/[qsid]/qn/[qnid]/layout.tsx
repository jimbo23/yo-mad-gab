'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
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

  const qsid = params.qsid;
  const qnid = params.qnid;

  const onNext = () => {
    if (qnid === '15') return;
    const nextQnid = +qnid + 1;
    router.push(`/qs/${qsid}/qn/${nextQnid}`);
  };

  return (
    <div className="flex min-h-screen bg-slate-600 justify-between">
      <p className="py-20 justify-center text-xl font-bold text-slate-200">
        {totalSeconds}
      </p>
      {children}
      <aside className="flex min-h-screen bg-slate-800 p-10 w-[20%] items-center justify-between flex-col drop-shadow-2xl">
        <div className="flex flex-col gap-10">
          <Button
            variant="destructive"
            className="px-4"
            onClick={isRunning ? pause : resume}
          >
            {isRunning ? 'Stop Timer' : 'Resume Timer'}
          </Button>
          <Button variant="secondary">Reveal Answer</Button>
        </div>
        <Button
          variant="default"
          className="bg-violet-600 px-10"
          onClick={onNext}
        >
          Next
        </Button>
      </aside>
    </div>
  );
}
