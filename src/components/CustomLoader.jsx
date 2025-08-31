"use client";

export default function CustomLoader() {
  return (
    <>
      <div className="block w-full h-full max-w-full min-h-screen">
        <div className="grid place-content-center w-full min-w-fit">
          <span className="font-mono px-4">Loading</span>
          <div
            role="status"
            aria-label="Loading"
            className="loading loading-spinner loading-lg transition-all duration-300"
          />
        </div>
      </div>
    </>
  );
}
