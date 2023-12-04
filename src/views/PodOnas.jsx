import "./PodOnas.css"

function PodOnas() {
    // const video = document.getElementById("video")
    return (
        <div>
            <div className="video-overlay"></div>
            <iframe className="video" id="video" width="1271" height="715" src="https://www.youtube.com/embed/Jox6R5-rIH0?list=PLdGJJ6BBahVodCt3Cet2bDmDSiRVJoE5G&autoplay=1&mute=1" title="Gradient Liquid Blue Shapes Animation Background video | Footage | Screensaver" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <div className="container_podonas">
                <img src="https://cdn.pixabay.com/photo/2023/06/21/04/42/automobile-8078415_1280.jpg" />
                <div>
                    <h1>Title</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aspernatur voluptate ipsam tenetur quis praesentium optio accusamus necessitatibus harum assumenda, obcaecati cupiditate ad quas libero architecto maxime dolore odio dolor?
                </div>
            </div>
            <div className="container_podonas">
                <img src="https://cdn.pixabay.com/photo/2023/06/21/04/42/automobile-8078415_1280.jpg" style={{ order: "1" }} />
                <div style={{ order: "0" }}>
                    <h1>Title</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, aspernatur voluptate ipsam tenetur quis praesentium optio accusamus necessitatibus harum assumenda, obcaecati cupiditate ad quas libero architecto maxime dolore odio dolor?
                </div>
            </div>
        </div >)
}

export default PodOnas;