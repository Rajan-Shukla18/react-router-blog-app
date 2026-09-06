const PostSkeleton = () => (
  <div
    className="animate-pulse"
    role="status"
    aria-label="Loading post"
  >
    <div className="mb-4 aspect-[9/6] w-full rounded-2xl bg-stone-200" />

    <div className="mb-3 h-3 w-20 rounded bg-stone-200" />

    <div className="mb-2 h-6 w-4/5 rounded bg-stone-200" />

    <div className="mb-2 h-4 w-full rounded bg-stone-200" />

    <div className="mb-5 h-4 w-3/4 rounded bg-stone-200" />

    <div className="flex items-center gap-3">
      <div className="h-8 w-8 rounded-full bg-stone-200" />

      <div className="space-y-2">
        <div className="h-3 w-24 rounded bg-stone-200" />
        <div className="h-3 w-16 rounded bg-stone-200" />
      </div>
    </div>
  </div>
);

export default PostSkeleton;