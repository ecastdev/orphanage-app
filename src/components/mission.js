import { EmojiPeopleTwoTone, MotionPhotosOffSharp, PushPinRounded, ViewSidebarTwoTone } from "@mui/icons-material"

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
        <div className="flex flex-col h-screen items-center mt-40 lg:mt-96">
            <h1 className="text-blue-950 text-center text-3xl lg:text-7xl font-bold">
                Our Activity
            </h1>
            <div className="mt-3 lg:mt-9 grid grid-cols-3 gap-9">
            {missionData.map((activi) =>(
                     <div className="grid mt-10 lg:mt-20">
                        <h1>
                            {activi.icon}
                        </h1>
                        <h2 className=" text-xl lg:text-3xl text-blue-950 text-center">
                            {activi.title}
                        </h2>
                        <p className="text-sm font-light text-center">
                            {activi.content}
                        </p>
                   </div>
                ))}

            </div>

        </div>
    )
}
