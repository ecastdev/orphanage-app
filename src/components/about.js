import { motion } from "framer-motion";

export default function About(){
  return(
      <div className=" mt-60 h-3xl flex  flex-col items-center">
            <motion.h1
            initial={{
               opacity: 0,
               y: 50,
             }}
             whileInView={{
               opacity: 1,
               y: 0,
               transition: {
                 duration: 1,
                 delay: 0.6,
               },
             }}
                className='text-6xl font-bold text-blue-900 text-center'>About</motion.h1>

              <motion.p
              initial={{
               opacity: 0,
               y: 50,
             }}
             whileInView={{
               opacity: 1,
               y: 0,
               transition: {
                 duration: 1,
                 delay: 0.9,
               },
             }}  className=' mt-10 text-center lg:text-2xl max-w-6xl font-light text-rose-9000'>
                  Our mission is simple yet profound: to provide a safe and loving home for
                   orphaned and abandoned children. We strive to create an atmosphere where
                   each child feels valued, respected, and empowered to pursue their
                   dreams. At the core of our values are compassion, integrity, and a
                    commitment to the well-being of every child under our care
                  </motion.p>
      </div>
  )
}
