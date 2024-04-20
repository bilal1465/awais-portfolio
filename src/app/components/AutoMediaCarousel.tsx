import { Carousel } from "@material-tailwind/react";


export const AutoMediaCarousel = () => {
    return (
        <div className="flex flex-col items-center justify-center pb-4">
            <Carousel loop className="rounded-xl lg:w-1/4 md:w-1/3 sm:w-1/2" placeholder={<div>Loading...</div>} >
                <video autoPlay muted loop className="object-cover">
                    <source src="media/videos/auto1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay muted loop className="object-cover">
                    <source src="media/videos/auto2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay muted loop className="object-cover">
                    <source src="media/videos/auto3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay muted loop className="object-cover">
                    <source src="media/videos/auto4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Carousel>
            <p className="pt-2">Watch with <a className="italic" href="/Automotive">Audio!</a></p>
        </div>
    )
}    