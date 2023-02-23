import { StyleSheet } from "react-native";

const RuletteStyles = StyleSheet.create({
    containercss: {
        flex: 1,
        backgroundColor: '#2E2E3E',

    },
    header: {

        width: '100%',

        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    logo: {
        backgroundColor: '#3A3A47',
        width: '100%',
        alignContent: 'center',
        color: 'white',
        fontSize: 64,
        borderRadius: 25,
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold',


    },

    margin_sm: {
        marginTop: 15,
    },


    tarjetcss: {


        backgroundColor: '#222525',
        paddingHorizontal: 39,
        marginBottom: 26,
        borderRadius: 8,


    },
});

export default RuletteStyles;