import React, { Component } from 'react';
import { View } from 'react-native-web';
import { colors } from '../../shared/appStyles';
import { Jumbotron, Button } from 'reactstrap'

class Info extends Component {

    render() {
        return (
            <div>
                <View style={{ flex: 1, height: "100% !important", justifyContent: 'center', alignItems: "center", backgroundColor: colors.mute }}>
                    <Jumbotron>
                        <h1 className="display-3">Info</h1>
                        <p className="lead">General information about the app and how to use. To be honest, I still dont know what will be here!</p>
                        <hr className="my-2" />
                        <p>Told you!, I am working on it! You may play around and see what is up :) </p>
                        <p className="lead">
                            <Button color="primary" href="https://github.com/musafadul/SIS">Show Code in GIT</Button>
                        </p>
                    </Jumbotron>
                </View>
            </div>
        );
    }
}

export default Info;
