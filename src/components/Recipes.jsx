import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Loading from "./Loading";
import Searchbar from "./Searchbar";
import { fetchRecipes } from "../services";
import RecipeCard from "./RecipeCard";
import Button from "./Button";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);
  const [isEmpty, setIsEmpty] = useState("wait");
  const [showMoreLoading, setShowMoreLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query, limit });
      if (data.length > 0) {
        setRecipes(data);
        setIsEmpty("true");
      } else {
        setIsEmpty("false");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setShowMoreLoading(false);
    }
  };
  const handleSearchedRecipe = async (e) => {
    e.preventDefault();
    if (query.length > 0) {
      setIsEmpty("wait");
      fetchRecipe();
    }
  };

  useEffect(() => {
    setShowMoreLoading(true);
    fetchRecipe();
  }, [limit]);

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10 ">
        <form
          action=""
          className="w-[300px] md:w-[400px] lg:w-[500px] 2xl:w-[600px]"
          onSubmit={handleSearchedRecipe}
        >
          <Searchbar
            placeholder="eg. Cake,Vegan,Chicken"
            handleInputChange={handleChange}
            rightIcon={
              <BsSearch
                className="text-gray-600"
                onClick={handleSearchedRecipe}
              />
            }
          />
        </form>
      </div>

      {isEmpty === "true" && (
        <>
          <div className="w-full  flex flex-wrap gap-10 px-0 lg:px-10 py-10">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>

          {showMoreLoading ? (
            <Loading />
          ) : (
            <div className="flex w-full items-center justify-center py-10">
              <Button
                title="Show More"
                className="bg-green-800 text-white  px-3 py-1 rounded-full text-sm"
                handleClick={() => setLimit((prev) => prev + 10)}
              />
            </div>
          )}
        </>
      )}

      {isEmpty === "false" && (
        <div className="text-white w-full items-center justify-center py-10">
          <p className="text-center">No Recipe Found</p>
        </div>
      )}

      {isEmpty === "wait" && <Loading />}
    </div>
  );
};

export default Recipes;
