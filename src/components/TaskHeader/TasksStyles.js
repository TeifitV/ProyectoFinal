import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 299,
        flexGrow: 0,
        justifyContent: 'center',
        width: '100%'
    },
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    avatar: {
        borderRadius: 50,
        height: 100,
        width: 100,
    },
    toDo: {
        color: 'white',
        fontSize: 36,
        textAlign: 'center'
    },
    date: {
        color: '#C0C0C0',
        fontSize: 16,
    }
});

export default styles;