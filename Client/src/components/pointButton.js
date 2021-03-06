import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { addPoint, removePoint } from '../store/actions/postAction'

function PointButton({ post }) {
    const dispatch = useDispatch()

    return (
        <View style={styles.textAndIconContainer}>
            {post.isPointed ? (
                <TouchableOpacity onPress={() => dispatch(removePoint(post.id))}>
                    <AntDesign name="upcircle" color="#21618C" size={20} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => dispatch(addPoint(post.id))}>
                    <AntDesign name="upcircleo" color="black" size={20} />
                </TouchableOpacity>
            )}
            <Text> {post.pointCount} Points</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textAndIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

export default PointButton
