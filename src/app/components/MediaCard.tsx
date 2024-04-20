export const MediaCard = () => {
    return (
    <div className="w-full">
        <video autoPlay muted loop className="object-cover">
            <source src="media/videos/al ansar event.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
    )
}