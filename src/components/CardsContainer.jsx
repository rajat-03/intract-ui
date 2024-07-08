
import Photo from './Photo'
import MultiCard from './MultiCard'
import TimerCard from './TimerCard'

const CardsContainer = () => {
    return (
        <>
        {/* <section className="bg-white bg-opacity-5 min-h-1 max-h-1"> </section> */}

             <TimerCard />
            <section className="bg-white bg-opacity-5 min-h-1 max-h-1"> </section>
            <MultiCard />
            <section className="bg-white bg-opacity-5 min-h-1 max-h-1"> </section>
            <Photo />

        </>
    )
}

export default CardsContainer