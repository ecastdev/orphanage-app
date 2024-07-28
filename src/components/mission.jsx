import { EmojiPeopleTwoTone, MotionPhotosOffSharp, PushPinRounded, ViewSidebarTwoTone } from "@mui/icons-material"
import { motion } from "framer-motion";

export default function OurMission(){
    const missionData = [
        {
            title : 'Empowering ',
            content: 'o provide a safe and loving home for orphaned and abandoned children',
            icon: <EmojiPeopleTwoTone fontSize="large" color='primary'/>
        },
        {
            title : 'Motivating ',
            content: 'o provide a safe and loving home for orphaned and abandoned children',
            icon: <MotionPhotosOffSharp color='primary' fontSize="large"/>
        },
        {
            title : 'promoting ',
            content: 'o provide a safe and loving home for orphaned and abandoned children',
            icon: <PushPinRounded color='primary' fontSize="large"/>
        },
        {
            title : 'Vision ',
            content: 'o provide a safe and loving home for orphaned and abandoned children',
            icon: <ViewSidebarTwoTone color='primary' fontSize="large"/>
        },
        {
            title : 'Empowering ',
            content: 'o provide a safe and loving home for orphaned and abandoned children',
            icon: <EmojiPeopleTwoTone color='primary' fontSize="large"/>
        },
        {
            title : 'Motivating ',
            content: 'o provide a safe and loving home for orphaned and abandoned children',
            icon: <MotionPhotosOffSharp color='primary' fontSize="large"/>
        },
    ]
    return(
        <div className="flex flex-col h-screen items-center h-screen mt-96 lg:mt-96">
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
             className="text-blue-950 text-center text-3xl lg:text-7xl font-bold">
                Our Activity
            </motion.h1>
            <motion.div
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
             }}  className="mt-2 lg:mt-9 grid grid-cols-2 lg:grid-cols-3 lg:gap-9">
                        {missionData.map((activi, index) => (
                          <motion.div
                          initial={{
                             opacity: 0,
                             x: 50,
                           }}
                           whileInView={{
                             opacity: 1,
                             x: 0,
                             transition: {
                               duration: 1,
                               delay: 1.3,
                             },
                           }}  key={index} className="grid mt-10 lg:mt-20">
                                <h1>
                                    {activi.icon || "Default Icon"}
                                </h1>
                                <h2 className="text-xl lg:text-3xl text-blue-950 text-center">
                                    {activi.title || "Default Title"}
                                </h2>
                                <p className="text-sm font-light text-center">
                                    {activi.content || "Default Content"}
                                </p>
                          </motion.div>
            ))}


            </motion.div>

        </div>
    )
}
