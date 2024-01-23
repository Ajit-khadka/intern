import plant from "../../data/plant";

const ExtraInfo = () => {
  let plantInfo = plant.map((items) => {
    return (
      <section
        className="ExtraInfo flex bg-[#f9f0f6] rounded-2xl py-4 px-5 space-x-4 mt-6 m-1"
        key={items.id}
      >
        <img
          className="extraImage h-[100px] w-[90px] "
          src={`./images/${items.image}`}
        />
        <div className="flex flex-col self-center  w-[146px] text-sm ">
          <p className="font-bold ">{items.title}</p>
          <p className="mt-2 text-[13px] text-gray-500">{items.details}</p>
        </div>
      </section>
    );
  });

  return (
    <div className="extraContainer font-Poppins">
      <p className="text-3xl font-bold">Why Choose Us?</p>
      <main className="plantsContainer flex justify-between flex-wrap">
        {plantInfo}
      </main>
    </div>
  );
};

export default ExtraInfo;
