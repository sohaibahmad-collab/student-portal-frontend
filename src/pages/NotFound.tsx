export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-lg text-gray-700 mt-2">Page Not Found</p>
      <a
        href="/"
        className="mt-4 px-4 py-2 bg-[#38A38A] text-white rounded-lg shadow hover:bg-[#2e8570]"
      >
        Go to login page
      </a>
    </div>
  );
}
