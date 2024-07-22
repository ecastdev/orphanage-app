import { VisibilityTwoTone } from "@mui/icons-material";
import { Button, Card } from "flowbite-react";

export default function Ouractivity(){
    const our_activity_data = [
        {
            titlee : 'training',
            content : 'Our mission is simple yet profound: to provide a safe and loving home for orphaned and abandoned children. We strive to create an atmosphere where each child feels valued, respected, and empowered to pursue their dreams. At the core of our values are compassion, integrity, and a commitment to the well-being of every child under our care.',
            btn: 'explore'
        },
        {
            titlee : 'training',
            content : 'Our mission is simple yet profound: to provide a safe and loving home for orphaned and abandoned children. We strive to create an atmosphere where each child feels valued, respected, and empowered to pursue their dreams. At the core of our values are compassion, integrity, and a commitment to the well-being of every child under our care.',
            btn: 'volunt'
        }
    ]
    return(
        <div className="bg-blue-900 h-96 w-screen flex flex-col items-center ">
             <h1 className="text-5xl text-center text-rose-100 mt-10  font-bold"> <VisibilityTwoTone color='secondary' fontSize="large"/>Our mission and value</h1>
            <div className="flex justify-center gap-8 mt-32">
                {our_activity_data.map((activi) =>(
                     <Card className="max-w-sm">
                        <h5 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
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
            </div>
        </div>
    )
}
