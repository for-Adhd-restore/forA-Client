import AuthCheck from '@/components/join/AuthCheck';
import EmailDuplicateCheck from '@/components/join/EmailDuplicateCheck';
import JoinDone from '@/components/join/JoinDone';
import JoinLast from '@/components/join/JoinLast';
import SetPassword from '@/components/join/SetPassword';
import SetProfile from '@/components/join/SetProfile';
import LoginScreen from '@/components/login/LoginScreen';
import SignupTermsScreen from '@/components/join/SignupTermsScreen';
import OnboardingStep1 from '@/components/join/OnboardingStep1';
import OnboardingStep2 from '@/components/join/OnboardingStep2';
import OnboardingStep3 from '@/components/join/OnboardingStep3';
import {
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';

const Stack = createStackNavigator();
export const LoginStack = () => {
    const screenOptions: StackNavigationOptions = {
        headerShown: false,
    };
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
                name="EmailDuplicateCheck"
                component={EmailDuplicateCheck}
            />
            <Stack.Screen name="AuthCheck" component={AuthCheck} />
            <Stack.Screen name="SetPassword" component={SetPassword} />
            <Stack.Screen name="SetProfile" component={SetProfile} />
            <Stack.Screen name="JoinLast" component={JoinLast} />
            <Stack.Screen name="JoinDone" component={JoinDone} />
            <Stack.Screen name="OnboardingStep1" component={OnboardingStep1} />
            <Stack.Screen name="OnboardingStep2" component={OnboardingStep2} />
            <Stack.Screen name="OnboardingStep3" component={OnboardingStep3} />
            <Stack.Screen
                name="SignupTermsScreen"
                component={SignupTermsScreen}
            />
        </Stack.Navigator>
    );
};
