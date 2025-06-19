export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 tracking-wide relative inline-block">
          <span className="relative z-10">Page Not Found</span>
          <span className="absolute inset-0 animate-glitch text-purple-400 blur-sm z-0 opacity-40">Page Not Found</span>
        </h2>
        <p className="text-muted text-white/70 mt-6 text-lg">
          Sorry, the page you were looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-8 inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};