export default function CustomLoader() {
  return (
    <>
      <div>
        <span className="font-mono px-4 text-white">Loading</span>
        <div
          role="status"
          aria-label="Loading"
          className="loading loading-spinner loading-lg text-white"
        />
      </div>
    </>
  );
}
