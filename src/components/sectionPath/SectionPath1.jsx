import Image from "next/image"

const SectionPath1 = () => {
  return (
    <div className="hidden lg:block absolute top-[45%] left-[-10%] -z-10">
      <Image
        src='/sectionPath/path1.svg'
        width={121}
        height={19}
        alt='Path1'
      />
    </div>
  )
}

export default SectionPath1