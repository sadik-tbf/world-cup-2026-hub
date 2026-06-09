import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="section-card overflow-hidden p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">User account</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Sign up and personalize your dashboard</h1>
            <p className="mt-4 text-slate-300">Create an account to save predictions, favorite teams, and manage your World Cup experience across devices.</p>
          </div>
          <div className="rounded-3xl bg-slate-900/90 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Coming soon</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Firebase Authentication</h2>
            <p className="mt-4 text-slate-300">Secure login, sign up, passwordless sign in, and account persistence based on Firebase Auth.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {['Save predictions', 'Favorite teams', 'Personal dashboard', 'Fast login'].map((feature) => (
            <div key={feature} className="rounded-3xl border border-slate-800/70 bg-slate-900/90 p-6">
              <p className="font-semibold text-white">{feature}</p>
              <p className="mt-2 text-sm text-slate-400">Personalized settings, saved brackets, and authenticated support for your tournament journey.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
