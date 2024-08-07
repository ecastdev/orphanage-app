import { VisibilityTwoTone } from "@mui/icons-material";
import { Button, Card } from "flowbite-react";
import { motion } from "framer-motion";

export default function Ouractivity(){
    const our_activity_data = [
        {
            titlee : 'training',
            content : 'Our mission is simple yet profound: to provide a safe and loving home for orphaned and abandoned children. We strive to create an atmosphere where each child feels valued, respected, and empowered to pursue their dreams. At the core of our values are compassion, integrity, and a commitment to the well-being of every child under our care.',
            btn: 'explore'
        },
        {
            titlee : 'training',
            content : 'Our mission is simple yet profound: to provide a safe and loving home for orphaned and abandoned children. We strive to create an atmosphere where each child feels valued, respected, ',
            btn: 'volunt'
        }
    ]
    return(
        <div className="bg-blue-900 h-96 w-screen flex flex-col items-center ">
             <motion.h1    initial={{
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
              }} className=" text-3xl lg:text-7xl text-center text-rose-100 mt-10  font-bold"> <VisibilityTwoTone color='secondary' fontSize="large"/>Our mission and value</motion.h1>
            <motion.div i initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  delay: 1.1,
                },
              }}  className="flex flex-col lg:flex-row justify-center  gap-2 lg:gap-8 mt-8 lg:mt-32">
                {our_activity_data.map((activi, index) =>(
                     <Card key={index} className="max-w-80 lg:max-w-sm">
                        <h5 className="text-md  lg:text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
                        {activi.titlee}
                        </h5>
                        <p className="font-normal text-rose-700 dark:text-gray-400">
                        {activi.content}
                        </p>
                        <Button color="failure">
                         {activi.btn}

                        </Button>
                   </Card>
                ))}
            </motion.div>
        </div>
    )
}
