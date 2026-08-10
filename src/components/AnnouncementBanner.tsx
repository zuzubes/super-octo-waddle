import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, X } from 'lucide-react';

const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();

  if (dismissed) {
    return null;
  }

  return (
    <div className="mb-6 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-600 px-5 py-3.5 text-white shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
        <Sparkles className="h-5 w-5" />
      </span>
      <p className="flex-1 text-sm font-semibold sm:text-base">
        Hypatos 3.0 released (LLM and specialized transformer), migrate your workflows now.
      </p>
      <button
        type="button"
        onClick={() => navigate('/migration')}
        className="shrink-0 text-sm font-medium text-blue-100 transition hover:text-white hover:underline underline-offset-4"
      >
        Get started
      </button>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="shrink-0 text-blue-200 transition hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AnnouncementBanner;
