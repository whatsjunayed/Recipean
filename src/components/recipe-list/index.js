import Card from "../ui/Card";

const RecipeDesign = ({ allrecipes }) => {
  return (
    <div>
      <div className="w-[80%] md:w-[90%] mx-auto">
        <h1 className="text-4xl text-center font-semibold pt-20 pb-10">
          Here is our Recipes
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {allrecipes.map((item) => {
            return <Card key={item.id} allitem={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeDesign;
