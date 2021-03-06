import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import RNUrlPreview from 'react-native-url-preview'
import { format } from 'timeago.js'
import { Card as CardView } from 'react-native-elements'
import PointButton from './pointButton'

function Card({ navigation, post, sheetRef }) {
    const time = format(
        post.createdAt.split('T')[0] + ' ' + post.createdAt.split('T')[1]
    )
    return (
        <CardView >

            {/**Header */}
            <View style={styles.headerContainer}>
                <View style={styles.textAndIconContainer}>
                    <AntDesign name="user" size={16} />
                    <Text style={styles.nameText}>
                        {' '}
                        {post.user.name} {post.user.lastName}
                    </Text>
                </View>

                <View style={styles.textAndIconContainer}>
                    <AntDesign name="clockcircleo" size={16} />
                    <Text style={styles.timeText}> {time}</Text>
                </View>
            </View>

            {/** Title */}
            {post.title != null && <Text style={styles.titleText}>{post.title}</Text>}

            {/** Url Preview */}
            <RNUrlPreview
                text={post.link}
                specialOnPress={() =>
                    navigation.navigate('Home', { screen: 'PostWebView', params: { url: post.link } })
                }
            />

            {/** Footer */}
            <View style={styles.footer}>
                <PointButton post={post} />
                <TouchableOpacity style={styles.textAndIconContainer} onPress={() => navigation.navigate('Home', { screen: 'Comments', params: { postId: post.id } })} >
                    <AntDesign name="aliwangwang-o1" size={16} />
                    <Text> {post.commentCount} Comments</Text>
                </TouchableOpacity>
            </View>
        </CardView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 15,
        marginTop: 15,
    },
    textAndIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nameText: {
        fontSize: heightPercentageToDP('2.3%'),
        fontFamily: 'Roboto-Medium',
    },
    titleText: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: heightPercentageToDP('2.5%'),
        fontFamily: 'Roboto-Medium',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 15,
    },
})

export default Card
