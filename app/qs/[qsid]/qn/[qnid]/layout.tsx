'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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

  const { totalSeconds, seconds, isRunning, pause, resume } = useTimer({
    expiryTimestamp: time,
  });
  const router = useRouter();
  const sp = useSearchParams();
  const isRevealed = sp.get('reveal') === 'true';

  const { qsid, qnid } = params;

  const onNext = () => {
    if (qnid === '15') return;
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
    <div className="flex min-h-screen bg-slate-600 justify-between">
      <Link href="/" className="bg-slate-300 p-4 absolute">
        Home
      </Link>
      <div className="flex flex-col w-full">
        <p className="py-20 text-center self-center justify-center text-5xl font-bold text-slate-200">
          0: {seconds}
        </p>
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
          className="bg-violet-600 px-10"
          onClick={onNext}
        >
          Next
        </Button>
      </aside>
    </div>
  );
}
