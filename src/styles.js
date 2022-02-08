
import {
    StyleSheet,
} from 'react-native';

export const colorPallete = {
    backgroundColor: "",
    headerColor: "#173F5F",
    trueColor: "#4a9918",
    falseColor: "#ED553B",
    defaultButtonColor: "#3CAEA3"

}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    testViewLabel: { padding: 24, fontSize: 24 },
    testViewImage: { height: 400, width: 500 },
    testViewButton: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    startGameButton: {
        backgroundColor: colorPallete.defaultButtonColor,
        borderRadius: 100,
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    testViewButtonLabel: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold'
    }
});

