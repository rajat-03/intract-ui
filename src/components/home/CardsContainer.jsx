
import Reward from '../Reward'
import AlphaHub from '../AlphaHub'
import MultiCard from '../MultiCard'


const CardsContainer = () => {
    return (
        <>
            <Reward />
            <section className="bg-white bg-opacity-5 min-h-1 max-h-1"> </section>
            <MultiCard />
            <section className="bg-white bg-opacity-5 min-h-1 max-h-1"> </section>
            <AlphaHub />

        </>
    )
}

export default CardsContainer