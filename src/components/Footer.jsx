export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title & Subtitle */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">Companies Directory</h2>
          <p className="text-blue-100 mt-1 text-sm">
            Explore top companies and discover insights with a clean browsing experience.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400 my-6 opacity-60"></div>

        {/* Bottom Text */}
        <div className="text-center text-blue-200 text-sm">
          © {new Date().getFullYear()} 
          <span className="font-semibold text-white"> Companies Directory</span>  
          — Built with <span className="text-yellow-300 font-semibold">React</span> & <span className="text-yellow-300 font-semibold">Vite</span>
        </div>
      </div>
    </footer>
  );
}
