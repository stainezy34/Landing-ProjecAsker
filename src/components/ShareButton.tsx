import { useState } from 'react';
import { Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';

interface ShareButtonProps {
  title?: string;
  description?: string;
}

export function ShareButton({ 
  title = "Check out ProjecAsker - The AI-powered project management tool", 
  description = "Revolutionize your project management with AI-driven organization, seamless collaboration, and powerful analytics." 
}: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const url = window.location.href;

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="rounded-full bg-white p-2 text-gray-600 shadow-lg hover:text-primary transition-colors duration-200 group"
        aria-label="Share"
      >
        <Share2 className="h-5 w-5 transform transition-transform duration-200 group-hover:scale-110" />
      </button>

      {showMenu && (
        <div className="absolute bottom-full right-0 mb-2 w-48 rounded-lg bg-white shadow-xl ring-1 ring-gray-200 animate-scale-in">
          <div className="p-2">
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              <Twitter className="h-4 w-4" />
              Share on Twitter
            </a>
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              <Facebook className="h-4 w-4" />
              Share on Facebook
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              Share on LinkedIn
            </a>
            <button
              onClick={copyToClipboard}
              className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
            >
              <LinkIcon className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy link'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}