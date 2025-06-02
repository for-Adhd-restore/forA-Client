import { StyleProp, StyleSheet, TextStyle } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexGrow: 1,
        width: '100%',
    },
    contentContainer: {
        padding: 24,
    },
    goback: {
        width: 36,
        height: 36,
        marginTop: 40,
        marginLeft: -15,
    },
    images: {
        marginTop: 40,
        marginBottom: 20,
    },
    icon: {
        marginBottom: 10,
    },
    allAgree: {
        marginTop: 40,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 16,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 20,
        alignItems: 'center',
        marginBottom: 80,
    },
    checkboxIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
});

export const text = {
    subtitle: {
        fontSize: 18,
        marginBottom: 5,
        color: '#444',
    },
    itemText: {
        flex: 1,
        marginLeft: 2,
        fontSize: 15,
    },
    requiredText: {
        color: '#52A55D',
    },
    linkText: {
        fontSize: 14,
        color: '#52A55D',
        textDecorationLine: 'underline',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
} as {
    [key: string]: StyleProp<TextStyle>;
};
