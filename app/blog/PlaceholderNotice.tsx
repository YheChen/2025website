import { Sparkles } from "lucide-react";

/**
 * TEMPORARY: notice that the blog currently contains AI-generated placeholder
 * content. Delete this file and its usage in app/blog/layout.tsx once real
 * posts are published.
 */
export default function PlaceholderNotice() {
  return (
    <div
      role="note"
      className="border-b border-amber-500/25 bg-amber-500/10"
    >
      <div className="mx-auto flex w-full max-w-5xl items-start gap-3 px-5 py-3 sm:items-center sm:px-6 lg:px-8">
        <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600 dark:text-amber-400 sm:mt-0" />
        <p className="text-pretty text-sm leading-relaxed text-amber-900 dark:text-amber-200">
          <span className="font-semibold">Heads up:</span> everything on this
          blog is fully AI-generated placeholder text. Real posts are coming
          soon.
        </p>
      </div>
    </div>
  );
}
