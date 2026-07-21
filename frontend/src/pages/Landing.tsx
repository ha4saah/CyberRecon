import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function Landing() {

  const navigate = useNavigate();


  return (

    <main
      className="
      min-h-screen
      bg-gradient-to-br
      from-zinc-950
      via-zinc-900
      to-black
      text-white
      "
    >


      <nav
        className="
        flex
        items-center
        justify-between
        px-10
        py-6
        "
      >

        <h1
          className="
          text-2xl
          font-bold
          tracking-tight
          "
        >
          CyberRecon
        </h1>



        <div className="flex gap-5">


          <a

            href="https://github.com/ha4saah"

            target="_blank"

            rel="noreferrer"

            className="
            rounded-xl
            border
            border-zinc-700
            px-5
            py-2
            text-sm
            hover:bg-zinc-800
            transition
            "
          >

            GitHub

          </a>



          <button

            onClick={() => navigate("/dashboard")}

            className="
            rounded-xl
            bg-purple-600
            px-5
            py-2
            text-sm
            font-medium
            hover:bg-purple-700
            transition
            "
          >

            Launch App

          </button>


        </div>


      </nav>




      <section
        className="
        flex
        min-h-[80vh]
        flex-col
        items-center
        justify-center
        px-6
        text-center
        "
      >


        <motion.h2

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="
          max-w-4xl
          text-5xl
          font-bold
          leading-tight
          md:text-7xl
          "
        >

          Professional Security
          <br />
          Reconnaissance Platform

        </motion.h2>



        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:0.3
          }}

          className="
          mt-6
          max-w-2xl
          text-lg
          text-zinc-400
          "
        >

          Discover attack surfaces, analyze security
          weaknesses, and generate professional
          security assessment reports.

        </motion.p>



        <motion.button

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:0.5
          }}

          onClick={() => navigate("/dashboard")}

          className="
          mt-10
          rounded-2xl
          bg-purple-600
          px-8
          py-4
          text-lg
          font-semibold
          hover:bg-purple-700
          transition
          "
        >

          Start Recon Scan

        </motion.button>



      </section>


    </main>

  );
}