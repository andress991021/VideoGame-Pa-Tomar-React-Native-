import {Text,StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

export default function TextTitle(props) {
    const {texttitle}=props;    
    return(
        <Text style={styles.texttitlecss}>
        {texttitle}
        </Text>
    );
}


TextTitle.propTypes={
    texttitle: PropTypes.string.isRequired//Component Required in string
};


const styles = StyleSheet.create({
    texttitlecss:{
        fontSize:36.08,
        fontWeight:'600',
        lineHeight:47.58,
        textAlign:'center',
        color:'white',
    }

});
