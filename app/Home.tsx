import { QUESTIONS_SET, CardLink } from './page';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-600 flex-col items-center p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-300">
        ACE SEA PEE DEE
      </h1>
      <div className="grid grid-cols-2">
        {Object.values(QUESTIONS_SET).map((value) => (
          <CardLink value={value} />
        ))}
      </div>
    </main>
  );
}
