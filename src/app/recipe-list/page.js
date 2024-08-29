import RecipeDesign from "@/components/recipe-list";

const fetchFunction = async () => {
  const requestRecipeItem = await fetch("https://dummyjson.com/recipes");
  return requestRecipeItem.json();
};
const page = async () => {
  const allrecipes = await fetchFunction();

    return <>
        <RecipeDesign allrecipes={ allrecipes.recipes} />
    </>;
};

export default page;
