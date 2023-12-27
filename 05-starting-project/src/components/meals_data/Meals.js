import React from "react"
import MealsMenu from "./MealsMenu"
import MealsSummary from "./MealsSummary"
const Meals = () => {
    return (<React.Fragment>
        <MealsSummary />
        <MealsMenu />
    </React.Fragment>)
}

export default Meals;