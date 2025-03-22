"use client";
const error: React.FC<{ error: Error; reset: () => void }> = function ({
  error,
  reset,
}) {
  return (
    <div className="bg-main flex h-[60vh] w-[40rem] flex-col items-center justify-center gap-5 rounded-lg border-2 border-indigo-300/20">
      <h2 className="text-2xl font-bold text-indigo-100">
        Something Went Wrong!
      </h2>
      <p className="text-lg font-medium text-red-600">{error.message}</p>
      <button
        className="cursor-pointer rounded-md bg-indigo-200/30 px-6 py-3 transition-all duration-300 hover:bg-indigo-50/60"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default error;
