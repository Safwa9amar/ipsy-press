import Layoutindex from "./HomeLayout";
import { createStackNavigator } from "@react-navigation/stack";
import LevelLayout from "./HomeLayout/LevelLayout";
import SubLevelLayout from "./HomeLayout/SubLevelLayout";
import SubSubLevelLayout from "./HomeLayout/SubSubLevelLayout";
import FinalLayout from "./HomeLayout/FinalLayout";
import Exercice from "./HomeLayout/ExerciceScreen";
import FoodScreen from "./HomeLayout/FoodScreen";

const HomeNavigator = createStackNavigator();

export default function Home() {
 

  return (
    <>
      <HomeNavigator.Navigator initialRouteName="indexLevels">
        <HomeNavigator.Screen
          name="Level"
          component={LevelLayout}
          options={{
            headerShown: false,
          }}
        />
        <HomeNavigator.Screen
          name="SubLevel"
          component={SubLevelLayout}
          options={{
            headerShown: false,
          }}
        />
        <HomeNavigator.Screen
          name="SubSubLevel"
          component={SubSubLevelLayout}
          options={{
            headerShown: false,
          }}
        />
        <HomeNavigator.Screen
          name="FinalLevel"
          component={FinalLayout}
          options={{
            headerShown: false,
          }}
        />
        <HomeNavigator.Screen
          name="Exercice"
          component={Exercice}
          options={{
            headerShown: false,
          }}
        />
        <HomeNavigator.Screen
          name="FoodScreen"
          component={FoodScreen}
          options={{
            headerShown: false,
          }}
        />

        <HomeNavigator.Screen
          name="indexLevels"
          component={Layoutindex}
          options={{
            headerShown: false,
          }}
        />
      </HomeNavigator.Navigator>
    </>
  );
}
