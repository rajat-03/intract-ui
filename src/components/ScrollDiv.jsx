import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const ScrollDiv = ({questData}) => {
    return (
        <div class="narrativeBody">
            {questData?.map((quest, index) => (
                <div key={index} class="questContainer" >

                    <div class="questImage hidden lg:block">
                        <Image src={quest.imageUrl} 
                        height={80}
                        width={120}
                        alt="questImage" 
                        className="rounded-xl h-full w-full" />
                    </div>
                    <div class="w-full">
                        <div class="questName">{quest.title}</div>
                        <hr className="border-dashed border border-[#ffffff26] rounded-full  opacity-100" />
                        <div class="questInfo">
                            <div class="questTasks">{quest.tasks}</div>
                            <div className='flex-grow'>
                                <div class="progressBarContainer">
                                <div className="rounded-[100px] border border-[#000] bg-[rgba(255,255,255,0.07)] shadow-[0px_-2px_2px_#0006_inset_0px_2px_2px_#0006_inset]  w-full h-full inline-flex items-center flex-shrink-0 overflow-hidden relative"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="questCompleteTick">
                        <FaCheck className='mt-[2px]' />
                    </div>
                </div>
            ))}

        </div>

    )
}

export default ScrollDiv