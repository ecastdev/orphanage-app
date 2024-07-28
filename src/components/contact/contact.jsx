import { ContactMail, Key, LocationSearchingTwoTone, SocialDistance } from "@mui/icons-material"
import { Button, Checkbox, TextInput, Label, Select } from "flowbite-react";
import { motion } from "framer-motion";


export default function Contact(){
    const contactData = [
        {
            icons: <LocationSearchingTwoTone fontSize="large"/>,
            titleIcons: "Address",
            description: " Our mission is simple yet profound: to provide a safe and loving home for orphaned and abandoned children. We strive to create an atmosphere where each child feels valued, respected, and empowered to pursue their dreams. At the core of our values are compassion, integrity, and a commitment to the well-being of every child under our care.',",
            moreContent: "",
        },
        {
            icons: <ContactMail fontSize="large"/>,
            titleIcons: "Contact",
            description: " Our mission is simple yet profound: to provide a safe and loving home for orphaned and abandoned children. We strive to create an atmosphere where each child feels valued, respected, and empowered to pursue their dreams. At the core of our values are compassion, integrity, and a commitment to the well-being of every child under our care.',",
            moreContent: "",
        },
        {
            icons: <SocialDistance fontSize="large"/>,
            titleIcons: "Follow us",
            description: "Our mission is simple yet profound: to provide a safe and loving home for orphaned and abandoned children. We strive to create an atmosphere where each child feels valued, respected, and empowered to pursue their dreams. At the core of our values are compassion, integrity, and a commitment to the well-being of every child under our care.',",
            moreContent: "",
        }
    ]
    return(
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
                 delay: 0.6,
               },
             }}  className="grid place-content-center mt-40  ">
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
                 delay: 0.9,
               },
             }}  className=" text-5xl lg:text-7xl text-rose-900 mt-5  lg:mt-10 ml-3 lg:ml-8">
                Contact
            </motion.h1>
            <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-20 grid-flow-row place-content-center ">
            {contactData.map((Cdata , index) =>(
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
                           delay: 0.6,
                         },
                       }}  key={index} className="flex gap-2">
                        <div>{Cdata.icons}</div>
                        <div className="grid max-w-96">
                                <h5 className="text-3xl  lg:text-5xl font-bold tracking-tight text-blue-900 dark:text-white">
                                {Cdata.titleIcons}
                                </h5>
                                <p className="font-normal  text-rose-700 dark:text-gray-400">
                                {Cdata.description}
                                </p>
                        </div>
                   </motion.div>
                ))}
            </div>

            <div className='flex flex-col lg:flex-row mt-7  lg:mt-16 items-center gap-20 justify-space-between'>

                    <form className="flex lg:w-2/5 flex-col gap-4">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                      </div>
                      <TextInput id="email1" type="email" placeholder="name@gmail.com" required />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                      </div>
                      <TextInput id="password1" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Submit</Button>
            </form>

                  <div className="max-w-96">
                            <div className="mb-2 block">
                            <Label htmlFor="countries" value="Select your country" className='text-2xl ' />
                            </div>
                            <Select id="countries" required>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Malawi</option>
                            </Select>
                 </div>
            </div>



    </motion.div>
    )
}
