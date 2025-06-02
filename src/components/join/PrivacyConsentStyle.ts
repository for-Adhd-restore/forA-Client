import { StyleProp, StyleSheet, TextStyle } from 'react-native';

export const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)', // 반투명 검정
        zIndex: 1000,
    },
    modalContainer: {
        backgroundColor: '#F4F9D9',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    header: {
        alignItems: 'center',
        paddingTop: 16,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    agreeTop: {
        width: 80,
        height: 4,
        marginTop: 5,
        marginBottom: 18,
    },
    content: {
        paddingBottom: 20,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        width: '95%',
        alignSelf: 'center',
    },
    body: {
        fontSize: 13,
        color: '#444',
        lineHeight: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    cell: {
        padding: 8,
        borderRightWidth: 1,
        borderColor: '#ccc',
        fontSize: 13,
        borderWidth: 1,
    },
    headerTable: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
    },
    dataTable: {
        flexDirection: 'row',
    },
    footer: {
        backgroundColor: '#F4F9D9',
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderTopWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        marginBottom: 20,
    },
});

export const text = {
    headerText: {
        color: '#6BA851',
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 30,
        marginTop: 40,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 20,
    },
    bodyTitle: {
        fontSize: 13,
        color: '#444',
        lineHeight: 20,
        marginTop: 40,
        marginBottom: 30,
    },
    footer: {
        fontSize: 13,
        color: '#949494',
        lineHeight: 20,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
} as {
    [key: string]: StyleProp<TextStyle>;
};
