import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronsDown, ArrowRight } from 'lucide-react' 

function GetStarted() {
  const navigate = useNavigate();

  function getStarted() {
    navigate("/register");
  }

  function login() {
    navigate("/login")
  }

  return (
    <div className="w-screen h-screen font-sans text-white p-8">
      <div className="w-full h-full relative border bg-slate-800 border-slate-500/80 rounded-2xl flex items-center justify-center overflow-hidden drop-shadow-xl">
        {/* Header */}
        <h3 className="absolute top-4 left-8 font-semibold text-white/30 text-3xl mb-8">Vintari</h3>
        <button
          onClick={login}
          className="absolute top-4 right-8 flex items-center gap-2 text-white/30 text-xl mb-8 cursor-pointer z-10"
        >
          Login
          {/* <ArrowRight className="h-5 w-5 text-white/30" /> */}
        </button>
        {/* Dynamic blobs */}
        <motion.div
          className="absolute w-60 h-60 bg-radial from-emerald-400 to-transparent rounded-full blur-3xl opacity-50 bottom-0 left-0"
          animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-32 h-32 bg-radial from-blue-600 to-transparent rounded-full blur-3xl opacity-50 bottom-50 left-50"
          animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-20 h-20 bg-radial from-purple-500 to-transparent rounded-full blur-[80px] opacity-90 top-0 left-80"
          animate={{ x: [0, -20, 20, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-40 h-40 bg-radial from-emerald-400 to-transparent rounded-full blur-3xl opacity-50 top-0 justify-center"
          animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute w-72 h-72 bg-radial from-blue-600 to-transparent rounded-full blur-3xl opacity-50 top-0 left-0"
          animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-60 h-60 bg-radial from-emerald-400 to-transparent rounded-full blur-[100px] opacity-40 bottom-0 right-0"
          animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-48 h-48 bg-radial from-purple-500 to-transparent rounded-full blur-[120px] opacity-30 top-0 right-0"
          animate={{ x: [0, -20, 20, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-sm">Scroll for More</p>
          <ChevronsDown className="h-6 w-6 text-white/70 z-10" />
        </motion.div>

        {/* 🔹 Content Layer */}
        <div className="relative z-10 text-center max-w-4xl px-4 text-shadow-md text-shadow-black/80">
          <h1 className="text-7xl font-semibold mb-5 leading-tight ">
            The Future of <br />
            Inventory Management
          </h1>
          <p className="text-2xl mb-12 text-slate-300">
            Streamline your workflow with AI-powered solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-fit mx-auto">
            <button
              onClick={getStarted}
              className="bg-emerald-400 w-40 h-12 rounded-2xl cursor-pointer shadow-md hover:bg-emerald-500 transition"
            >
              Get Started
            </button>
            <button className="w-40 h-12 cursor-pointer border border-emerald-400 rounded-2xl hover:bg-emerald-400/20 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
