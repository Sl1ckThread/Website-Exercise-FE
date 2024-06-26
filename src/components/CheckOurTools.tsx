import Rankdte from "/src/assets/features/rankdte.png";
import Searchbarimg from "/src/assets/features/searchbarexer.png";

export default function CheckOurTools() {
  return (
    <section className='font-poppins scrollbar-hide text-white bg-gradient-to-t w-full pb-[50px] pt-[200px] md:px-[145px] px-8 items-center flex md:flex-row flex-col gap-[105px]'>
      <div className='flex flex-col gap-0 font-inter leading-none'>
        <div className='w-fit h-fit bg-[#FFFFFF] text-exer-gunmetal font-extrabold'>
          <h1 className='md:text-[82px] text-[41px] p-0 leading-none'>CHECK</h1>
        </div>
        <h1 className='font-extrabold md:text-[99px] text-[50px] md:tracking-[-5.965px] tracking-[-3px]'>
          Our
        </h1>
        <h1 className='font-black md:text-[106px] text-[53px] pl-6 md:tracking-[-12.794px] tracking-[-6px]'>
          TOOLS
        </h1>
      </div>
      {/* card untuk features */}
      <div className='flex md:flex-row flex-col md:gap-[72.7px] gap-[36px] overflow-x-hidden'>
        <div
          className='w-[345px] h-[432px] bg-white rounded-3xl shadow-xl flex flex-col
            hover:scale-105 transition-transform duration-300 ease-in-out
          '>
          <img
            src={Searchbarimg}
            alt='searchbarexer'
            className='w-auto h-[275px]'
            style={{ objectFit: "cover" }}
          />
          <div className='flex flex-col justify-center items-center py-[18px]'>
            <div className='bg-exer-darkelectricblue font-inter font-black text-[31px] px-1 leading-none'>
              URL Shortener
            </div>
            <p className='font-normal font-inter text-[15.9px] text-center text-black pt-[10px] p-4'>
              Streamline your online presence, craft a personalized link that
              reflects your brand and simplifies your web presence. try now!
            </p>
          </div>
        </div>
        <div className='w-[345px] min-h-[432px] bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out'>
          <img
            src={Rankdte}
            alt='searchbarexer'
            className='w-auto h-[275px]'
            style={{ objectFit: "cover" }}
          />
          <div className='flex flex-col justify-center items-center py-[18px]'>
            <div className='bg-exer-darkelectricblue font-inter font-black text-[31px] px-1 leading-none'>
              Ranking Elektro
            </div>
            <p className='font-normal font-inter text-[15.9px] text-center text-black pt-[10px] p-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
              fringilla nulla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
