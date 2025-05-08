export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
      <div className="w-16 h-16 border-t-4 border-primary rounded-full animate-spin"></div>
      <p className="text-lg font-medium text-muted-foreground">✨ Fetching your Todo list...</p>
    </div>
  );
}
