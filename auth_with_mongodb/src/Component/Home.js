import React, { useEffect, useState } from "react";
import "./Component.css";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [APP_ID, setAppId] = useState("37267672");
  const [APP_KEY, setAppKey] = useState("c886a05d434f00033ac2ae9eb21f8df4");
  const [q, setQ] = useState();
  const [type, setType] = useState("public");

  const navigate = useNavigate();
  const signinLink = () => {
    navigate("/Signin", { replace: true });
  };
  const signupLink = () => {
    navigate("/Signup", { replace: true });
  };

  useEffect(() => {
    // getRecipes();
  }, []);

  const getRecipes = async () => {
    console.log("q value = " + q);
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=${type}&q=${q}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };
  return (
    <>
      <div className="row header">
        <div className="col-md-2">
          <a className="navbar-brand" href="#">
            <h3 className="navbar">FOOD STUDIO</h3>
          </a>
        </div>

        <div className="col-md-6 ">
          <input
            className="form-control me-2 navigate-margin"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search Recipe"
            aria-label="Search"
          />
        </div>
        <div className="col-md-2">
          <button
            className="favorite"
            id="rbd"
            type="submit"
            onClick={() => {
              getRecipes();
            }}
          >
            Search Recipe
          </button>
        </div>
        <div className="col-md-2 ">
          <button
            className="favorite"
            id="rbd"
            type="submit"
            onClick={() => {
              signupLink();
            }}
          >
            Register
          </button>

          <button
            className="favorite"
            id="rbd"
            type="submit"
            onClick={() => {
              signinLink();
            }}
          >
            Sign In
          </button>
        </div>
      </div>

      {recipes.map((item) => {
        return (
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-4 imgs">
                  <img src={item.recipe.images.REGULAR.url} alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div>
                      <b>
                        <span>{item.recipe.label}</span>
                      </b>
                    </div>
                    <div>
                      <b>Diat Labels :</b>
                      <span>{item.recipe.dietLabels}</span>
                    </div>
                    <div>
                      <b>Calories:</b>
                      <span> {item.recipe.calories}</span>
                    </div>
                    <div>
                      <b>ingredientLines:</b>
                      <span>{item.recipe.ingredientLines}</span>
                    </div>
                    <div>
                      <b>CuisineType: </b>
                      <span> {item.recipe.cuisineType}</span>
                    </div>
                    <div>
                      <b>MealType: </b>
                      <span> {item.recipe.mealType}</span>
                    </div>
                    <div>
                      <b>Dishtype:</b>
                      <span> {item.recipe.dishType}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Home;
