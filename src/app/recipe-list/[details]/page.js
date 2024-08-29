import { GiMeal } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";


const fetchFunction = async (gotit) => {
  const requestDetails = await fetch(`https://dummyjson.com/recipes/${gotit}`);
  return requestDetails.json();
};
const page = async ({ params }) => {
  const acceptDetails = await fetchFunction(params.details);
  return (
    <>
      <div className="w-full h-screen ">
        <h1 className="text-center py-12 text-4xl font-semibold">{acceptDetails.name} </h1>
        <div className="grid py-10 sm:grid-cols-2 w-[85%] items-center justify-center mx-auto shadow-[5px_2px_15px_black]">
          <img src={acceptDetails.image} alt="" className=" w-[90%] sm:w-[60%] mx-auto" />
          <div className="px-10 my-6">
            <h1 className="text-xl font-semibold flex items-center gap-3">
              <GiMeal size={30} />
              {acceptDetails.mealType}
            </h1>
            <h1 className="text-xl font-semibold py-5 flex items-center gap-3">
              <MdLocationOn size={30} />

              {acceptDetails.cuisine}
            </h1>
            <h1 className="text-lg font-semibold">Ingredients :</h1>
            <ul>
              {acceptDetails.ingredients.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FaCheck />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
