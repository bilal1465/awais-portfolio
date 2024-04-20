import { MediaCard } from "./MediaCard";
import { Carousel } from "@material-tailwind/react";


export const MediaRoulette = () => {
    return (
        <Carousel loop className="rounded-xl lg:w-1/4 md:w-1/3 sm:w-1/2" placeholder={<div>Loading...</div>} >
            <video autoPlay muted loop className="">
                <source src="media/videos/islamicevent1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video autoPlay muted loop className="object-cover">
                <source src="media/videos/islamicevent2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video autoPlay muted loop className="object-cover">
                <source src="media/videos/islamicevent3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video autoPlay muted loop className="object-cover">
                <source src="media/videos/islamicevent4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Carousel>
    )
}    