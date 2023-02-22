import { Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default function OptionButtom(props) {
    const { titlename, linkdirection } = props
    return (


        

        //<Button   title={titlename} onPress={linkdirection}/>

        <TouchableOpacity
            style={{
                ...styles.buttoncss,
                backgroundColor: '#3A3A47'
            }}
            onPress={linkdirection}>

            <Text style={{
                ...styles.buttontextcss,
                color: 'white'
            }}>
                {titlename}
            </Text>

        </TouchableOpacity>
    )
}


OptionButtom.propTypes = {
    titlename: PropTypes.string.isRequired//Component Required in string
};


const styles = StyleSheet.create({
    buttoncss: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 12,
        width: 50

    },

    buttontextcss: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19

    }
});
