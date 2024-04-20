import { NavBar } from "../components/NavBar"

export default function Home() {
    return (
        <div>
            <NavBar />
        <div className="flex space-x-4 p-6">
            <div>
                <video controls className="object-cover rounded">
                    <source src="media/videos/islamicevent1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div>
                <video controls className="object-cover rounded">
                    <source src="media/videos/islamicevent2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div>
                <video controls className="object-cover rounded">
                    <source src="media/videos/islamicevent3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div>
                <video controls className="object-cover rounded">
                    <source src="media/videos/islamicevent4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
        </div>
    )
}