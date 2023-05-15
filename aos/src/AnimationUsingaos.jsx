
import { Card } from 'antd';
import { useEffect } from 'react';
import AOS from 'aos'

const { Meta } = Card;


const randomImage = 'https://picsum.photos/240/300.jpg';

const animationNameList = ["fade", "fade-up", "fade-down",
    "fade-left", "fade-right", "fade-up-right", "fade-up-left", "fade-down-right",
    "fade-down-left", "flip-up", "flip-down", "flip-left",
    "flip-right", "Slide animations:", "slide-up", "slide-down", "slide-left",
    "slide-right", "zoom-in", "zoom-in-up", "zoom-in-down",
    "zoom-in-left", "zoom-in-right", "zoom-out", "zoom-out-up", "zoom-out-down",
    "zoom-out-left", "zoom-out-right", "top-bottom",
    "top-center", "top-top", "center-bottom", "center-center", "center-top",
    "bottom-bottom", "bottom-center", "bottom-top",]

const easeList = ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-back",
    "ease-out-back", "ease-in-out-back", "ease-in-sine", "ease-out-sine",
    "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad",
    "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart"]


export const AnimationUsingaos = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            {animationNameList.map((animation) => {
                return (
                    <div className="animeList" key={animation}>
                        <RandomImgCard
                            title={animation}
                            anime={animation} />
                    </div>

                )
            })}

        </>

    )
}


const RandomImgCard = (props) => {
    const { anime, title } = props
    return (
        <>
            <div className="container">
                <h1 style={{ textTransform: 'capitalize',textAlign:'center' }}>{title}</h1>
                <div data-aos={anime} >
                    <Card
                        hoverable
                        style={{
                            width: 240,
                            margin: 'auto'

                        }}
                        cover={<img alt="example" src={randomImage} />}
                    >
                        <Meta title="Europe Street beat" description="This is Des" />
                    </Card>
                </div>
            </div>
        </>

    )
}

