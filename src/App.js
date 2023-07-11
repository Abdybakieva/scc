import "./App.css";
import Photo from "./Group 2.1.png";
import Burger from "./Group 3.png";
import PhotoIphone from "./BSPP2266.png";
function App() {
  return (
    <div>
      <header className=" sm: m-auto  w-4/5 w-10 ">
        <nav className="   border-solid  border-b-2 sm:block hidden">
          <ul className=" flex items-center justify-between py-5 text-lg   ">
            <li className="text-[#828282] hover:text-[#070707]">Home</li>
            <li className="text-[#828282] hover:text-[#070707]">About me</li>
            <li className="text-[#828282] hover:text-[#070707]">Skills</li>
            <li className="text-[#828282] hover:text-[#070707]">Portfolio</li>
            <li className="text-[#828282] hover:text-[#070707]">Contacts</li>
          </ul>
        </nav>

        <div className="flex items-end  justify-between  py-[30px] sm:flex flex-wrap ">
          <h2 className="text-[#070707] font-[Gilroy-Bold] text-5xl">
            Denis <br /> Novik
          </h2>
          <p className="font-[Gilroy-Medium] text-[18px] ext-[#070707] sm: flex flex-wrap">
            UX | UI designer <br /> 24 years old, Minsk
          </p>
          <p className="text-[#828282] font-[Gilroy-Medium] text-[18px] rotate-90 sm:block hidden">
            RU<span className="text-[#070707]">|ENG</span>
          </p>
          <div className="sm:hidden flex justify-end  mb-[50px] ">
            <img src={Burger} />
          </div>
        </div>
        <img src={Photo} className="sm:flex hidden" />
        <img src={PhotoIphone} className="sm:hidden flex p-0 " />
      </header>
      <main className="bg-[#F6F6F6]">
        <div className=" m-auto w-4/5 flex justify-center flex-col">
          <h4 className="text-[34px] font-[Gilroy-Bold] text-center text-center pb-[20px] pt-[50px]">
            About me
          </h4>
          <p className="text-[18px] font-[Gilroy-Medium] text-[#070707] text-center text-center pb-[20px]">
            Hi, I'm Denis – UX/UI designer from Minsk. <br /> I'm interested in
            design and everything connected with it.
          </p>
          <p className="text-[18px] font-[Gilroy-Medium] text-[#070707] text-center pb-[20px]">
            I'm studying at courses "Web and mobile design <br />
            interfaces" in IT-Academy.
          </p>
          <p className="text-[18px] font-[Gilroy-Medium] text-[#070707] text-center pb-[50px]">
            Ready to implement excellent projects <br />
            with wonderful people.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
