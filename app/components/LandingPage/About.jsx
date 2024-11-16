export default function About() {
  return (
    <>
      <div className=" py-6 ">
        <div className=" flex justify-between flex-col lg:flex-row lg:gap-0 gap-10">
          <div className=" ">
            <h3 className=" p-4 text-lg text-center px-8 uppercase font-medium bg-offWhite rounded-3xl ">
              About Us
            </h3>
          </div>
          <div className=" w-full text-center lg:w-[60%] flex flex-col gap-5 ">
            <p className=" text-lg font-bold tracking-wide">
              Travelling Is Way To Explore New Places. Learn A Wonderfull Way To
              Explore New Places. Learn About Different Culture And Gain New
              Exeperience Travelling Is A Wonderfull About Different Culture And
              Gain New Exeperience
            </p>

            <div className=" flex text-sm gap-8 flex-col md:flex-row text-textBlack">
              <div className=" bg-actionBlue p-1 rounded-full"></div>
              <p className="  ">
                Travelling Is A Wonderfull Way To Explore New Places. Learn
                About Different Culture And Gain New Exeperience Travelling Is A
                Wonderfull Way To Explore New Places. Learn About Different
                Culture And Gain New Exeperience
              </p>
              <div className=" bg-actionBlue p-1 rounded-full"></div>
              <p className=" ">
                Travelling Is A Wonderfull Way To Explore New Places. Learn
                About Different Culture And Gain New Exeperience Travelling Is A
                Wonderfull Way To Explore New Places. Learn About Different
                Culture And Gain New Exeperience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex md:justify-center justify-between md:flex-row  gap-6 md:gap-12  py-10 flex-col flex-wrap">
        <div className=" rounded-[50px] p-14 md:p-20 text-center bg-offWhite xl:flex-grow">
          <h3 className=" text-8xl md:text-9xl font-thin text-actionBlue pb-6 tracking-wide">
            10+
          </h3>
          <p className=" uppercase text-lg font-thin text-textBlack tracking-wide">
            Year Experience
          </p>
        </div>
        <div className=" rounded-[50px] p-14 md:p-20  text-center bg-offWhite xl:flex-grow">
          <h3 className=" text-8xl md:text-9xl font-thin text-actionBlue pb-6 tracking-wide">
            12K
          </h3>
          <p className=" uppercase text-lg font-thin text-textBlack tracking-wide">
            Customer
          </p>
        </div>
        <div className=" rounded-[50px] p-14 md:p-20  text-center bg-offWhite xl:flex-grow">
          <h3 className="text-8xl md:text-9xl font-thin text-actionBlue pb-6 tracking-wide">
            4.7
          </h3>
          <p className=" uppercase text-lg font-thin text-textBlack tracking-wide">
            Overall Rating
          </p>
        </div>
      </div>
    </>
  );
}
