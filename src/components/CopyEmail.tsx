import { useEffect, useRef, useState } from 'react';

interface Props {
  email: string;
}

export default function CopyEmail({ email }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      markCopied();
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(textarea);

      if (copied) {
        markCopied();
      } else {
        window.location.href = `mailto:${email}`;
      }
    }
  }

  function markCopied() {
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-flex items-center gap-2 border border-line px-4 py-3 text-[13px] font-medium text-ink transition-colors hover:border-ink"
      aria-live="polite"
    >
      <svg
        className="h-3.5 w-3.5 text-muted"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="14" height="14" x="8" y="8" rx="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
      {copied ? 'Copied' : 'Copy email'}
    </button>
  );
}
