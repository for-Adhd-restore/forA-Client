import useLaunch from '@/hooks/useLaunch';
import { LoginStack } from '@/navigation/stacks/LoginStack';
import HomeTab from '@/navigation/tabs/HomeTab';
import OnboardingStep1 from '@/components/join/OnboardingStep1';
import OnboardingStep2 from '@/components/join/OnboardingStep2';
import OnboardingStep3 from '@/components/join/OnboardingStep3';
import { useAuthStore } from '@/store/authStore';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';

const MainNavigation = () => {
    const Stack = createStackNavigator();
    const isLoggedIn = useAuthStore((state) => state.accessToken);
    const firstLaunch = useLaunch();
    const screenOptions: StackNavigationOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="launch"
                screenOptions={screenOptions}
            >
                {isLoggedIn ? (
                    <>
                        <Stack.Screen name="HomeTab" component={HomeTab} />
                        <Stack.Screen
                            name="OnboardingStep1"
                            component={OnboardingStep1}
                        />
                        <Stack.Screen
                            name="OnboardingStep2"
                            component={OnboardingStep2}
                        />
                        <Stack.Screen
                            name="OnboardingStep3"
                            component={OnboardingStep3}
                        />
                    </>
                ) : (
                    <Stack.Screen name="LoginStack" component={LoginStack} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MainNavigation;
