import { IoIosArrowRoundForward } from "react-icons/io";
import ReactCurvedText from "react-curved-text";

const UserInfo = () => {
  return (
    <div className="userInfoContainer flex justify-evenly flex-wrap">
      <section className="About flex flex-col ">
        <p className="title text-5xl font-bold font-Coustard mt-14">
          We bring&nbsp;
          <span className="ml-[1px] text-[#BB78A4] ">terrific change </span> in
          you.
        </p>
        <br />
        <p className="description font-Poppins text-[15px] text-gray-500 ">
          We are dedicated to help you achieve a sense of well being for your
          mind & soul by providing a variety of healthcare & beauty services.
        </p>
        <div className="learnCircleContainer flex w-[100%]  mt-4 justify-end ">
          <div className="learnCircle  h-[120px] w-[120px] bg-gradient-to-r from-[#BB78A4] via-[#bb8daab4] to-pink-100 rounded-[50%] text-white flex justify-center items-center text-xl relative">
            <IoIosArrowRoundForward className="z-10 text-3xl" />

            <p className="userinfo--curvetext rounded-[50%] absolute text-white text ">
              <ReactCurvedText
                width={370}
                height={300}
                cx={185}
                cy={149}
                rx={29}
                ry={29}
                startOffset={0}
                reversed={true}
                text="More Learn More Learn "
                svgProps={{
                  className:
                    " rounded-[50%] tracking-widest text-md font-Poppins text-[14px]",
                  style: { fill: "white", letterSpacing: "1px" }, // Set the text color to white
                }}
              />
            </p>
          </div>
        </div>
      </section>
      <section className="Profile flex justify-center items-center relative">
        <div className="bordercircle rounded-full border-2 border-black h-[400px] w-[400px] relative">
          {" "}
          <div className="modelmoon h-6 w-6 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-gray-200 absolute top-[60px] right-8"></div>
        </div>

        <div className="modelback h-[340px] w-[340px] rounded-[50%] bg-[#F0EAE8] absolute"></div>
        <img
          className="model h-[390px] w-[500px]  mb-9 z-10 absolute rotate-5"
          src="/images/erling.png"
        />
      </section>
    </div>
  );
};

export default UserInfo;
