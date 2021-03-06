import React, { Component } from 'react';
import { View } from 'react-native-web';
import { colors } from '../../shared/appStyles';
import { Jumbotron, Button } from 'reactstrap'

class Exams extends Component {

    render() {
        return (
            <div>
                <View style={{ flex: 1, height: "100% !important", justifyContent: 'center', alignItems: "center", backgroundColor: colors.mute }}>
                    <Jumbotron >
                        <h1 className="display-3">Exams</h1>
                        <p className="lead">Upcoming and registered exams will show here. Students can register or cancel an exam too. Working on it! :)</p>
                        <hr className="my-2" />
                        <p>You may play around and see what is up :) </p>
                        <p className="lead">
                            <Button color="primary" href="https://github.com/musafadul/SIS">Show Code in GIT</Button>
                        </p>
                    </Jumbotron>
                </View>

            </div>
        );
    }
}

export default Exams;
