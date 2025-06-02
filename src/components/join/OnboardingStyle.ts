import { StyleProp, StyleSheet, TextStyle } from 'react-native';

export const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        width: '100%',
        height: 150,
        bottom: 0,
        paddingBottom: 34,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    nextButton: {
        position: 'absolute',
        // width: '100%',
        width: '90%',
        height: 50,
        // backgroundColor: '#EEE',
        backgroundColor: '#52A55D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 60,
        borderWidth: 1,
        borderColor: '#52A55D',
    },
    Onboarding: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    OnboardingContents: {
        position: 'absolute',
        // alignItems: 'center',
        top: 120,
        left: 0,
    },
    JoinDoneIcon: {},
    OnboardingStepPhone: {
        top: -22,
        alignSelf: 'center',
    },
    OnboardingStepPagination: {
        marginBottom: 10,
        marginTop: 30,
    },
});

export const text = {
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    buttonText: {
        color: '#232323',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 22.4,
    },
    OnboardingStepText: {
        color: '#000',
        fontSize: 22,
        fontWeight: '800',
        flexGrow: 1,
        marginBottom: 5,
        left: 30,
    },
} as {
    [key: string]: StyleProp<TextStyle>;
};
