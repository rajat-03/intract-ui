import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const ScrollDiv = ({ questData }) => {
    return (
        <div className="narrativeBody">
            {questData?.map((quest, index) => (
                <div key={index} className="questContainer">

                    <div className="hidden lg:block questImage">
                        <Image
                            src={quest.imageUrl}
                            height={80}
                            width={120}
                            alt="questImage"
                            className="rounded-xl h-full w-full"
                        />
                    </div>
                    <div className="w-full">
                        <div className="questName">{quest.title}</div>
                        <hr className="border-dashed border border-[#ffffff26] rounded-full opacity-100" />
                        <div className="questInfo">
                            <div className="questTasks">{quest.tasks}</div>
                            <div className="flex-grow">
                                <div className="progressBarContainer">
                                    <div className="rounded-[100px] border border-[#000] bg-white-07 shadow-[0px_-2px_2px_#0006_inset_0px_2px_2px_#0006_inset] w-full h-full inline-flex items-center flex-shrink-0 overflow-hidden relative"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="questCompleteTick">
                        <FaCheck className="mt-[2px]" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ScrollDiv;
