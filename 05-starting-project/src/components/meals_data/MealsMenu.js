import { DUMMY_MEALS } from "./MealsDummy";
import MealsMenuStyles from '../styles/MealsMenu.module.css'
import Card from "../general/Card";
import MealItem from "./meal_item/MealItem";

const MealsMenu = () => {
    const showAvailMeals = DUMMY_MEALS.map((meals) => (<MealItem key={meals.id} meal={meals} />))
    return (
        <section className={MealsMenuStyles.meals}>
            <Card>
                <ul>{showAvailMeals}</ul>
            </Card>
        </section>
    )
}

export default MealsMenu;