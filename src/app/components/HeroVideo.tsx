export const HeroVideo = () => {
    return (
        <div className="flex items-center justify-center w-screen pt-5 pb-14">
            <video autoPlay muted loop className="object-cover">
                <source src="media/videos/bmw.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
} 