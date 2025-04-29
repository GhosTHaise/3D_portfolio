import { testimonials } from "../../constants"
import GlowCard from "../components/glow-card"
import TitleHeader from "../components/title-header"

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="flex-center section-padding"
        >
            <div className="size-full md:px-10 px-5">
                <TitleHeader
                    title="What People Say About Me?"
                    sub="⭐ Client Feedback Hightlights"
                />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {
                        testimonials.map(({ imgPath, name, review, mentions }, index) => (
                            <GlowCard
                                key={name}
                                card={{
                                    review: review,
                                    title: name,
                                    imgPath: imgPath,
                                }}
                                index={index}
                            >
                                <div className="flex items-center gap-3">
                                    <div>
                                        <img src={imgPath} alt={name} />
                                    </div>
                                    <div>
                                        <p className="font-bold">
                                            {name}
                                        </p>
                                        <p className="text-white-50">
                                            {mentions}
                                        </p>
                                    </div>
                                </div>
                            </GlowCard>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials