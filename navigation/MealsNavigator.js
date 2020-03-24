import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"


import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen, //Shorter
    CategoryMeal: {
        screen: CategoryMealScreen //Longer
    },    MealDetail: MealDetailScreen
})

export default createAppContainer(MealsNavigator)