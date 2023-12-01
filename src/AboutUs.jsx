import './AboutUs.css'

function AboutUs(clicked) {
    return (
        <div className={`aboutus-page`}> <br /><br /><br />

            <div className={`aboutus-div  ${clicked ? 'clicked' : ''}`}>
                <div style={{ width: '61%', height: '300px', overflow: 'hidden' }}>
                    <img src="/image/aboutus.jpg" alt="" className={`aboutus-img`} />
                </div>
                <div style={{ width: '40%' }}>
                    <h1 className={`aboutus-title ${clicked ? 'clicked' : ''}`}>ABOUT US</h1>
                    <div style={{ textAlign: 'left', marginLeft: '20px', width: '90%' }}>
                        FIRST FASHION, the iconic Vietnam luxury fashion house, is synonymous with timeless elegance, innovation, and sophistication. <br /> <br />
                        Our designs are renowned for their simplicity and understated chic, featuring classic pieces like the little black dress,
                        tweed suits, and quilted handbags, which have become enduring symbols of style. <br /><br />
                        With a commitment to craftsmanship and a dedication to pushing the boundaries of fashion, FIRST FASHION gives you a symbol of luxury and refinement that transcends time and trends.
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className={`vison-div`}>
                <div style={{ width: '40%' }}>
                    <h1 className={`vison-title ${clicked ? 'clicked' : ''}`}>VISION</h1>
                    <div style={{ textAlign: 'right', marginLeft: 'auto', marginRight: '20px', width: '90%' }}>
                        FIRST FASHION's vision has always been rooted in a pursuit of timeless beauty and sophistication. <br /><br />
                        FIRST FASHION's vision goes beyond clothing; it encompasses a lifestyle of refinement and luxury.
                        The brand consistently strives for innovation while maintaining a deep respect for its heritage and iconic designs. <br /><br />
                        WE envisions a world where style and individuality coexist harmoniously, where each creation is a work of art, <br /> and where the pursuit of excellence never wavers.
                    </div>
                </div>
                <div style={{ width: '61%', height: '300px', overflow: 'hidden' }}>
                    <img src="/image/vision.jpg" alt="" className={`vison-img`} />
                </div>
            </div>
            <br /><br /><br />
            <div className={`misson-div`}>

                <div style={{ height: '565px', overflow: 'hidden' }}>
                    <img src="/image/mission.jpg" alt="" />
                </div>
                <h1 className={`mission-title ${clicked ? 'clicked' : ''}`}>MISSION</h1>
                <div style={{width:'55%', margin:'0 auto'}}>
                    FIRST FASHION's mission has always been to inspire and empower individuals to express their unique style and personality through the art of fashion. <br /><br />
                    The brand seeks to create exceptional, high-quality garments and accessories that not only enhance one's appearance but also serve as a form of self-expression
                </div>
            </div>
            <br /><br /><br /><br /><br />
        </div>
    );
}

export default AboutUs;