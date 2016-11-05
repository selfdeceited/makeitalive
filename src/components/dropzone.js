import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

import DoneIcon from 'material-ui/svg-icons/action/done'
import CancelIcon from 'material-ui/svg-icons/av/not-interested'

import RaisedButton from 'material-ui/RaisedButton'
//import request from 'superagent'

export default class ImageDropzone extends Component {
    constructor(props) {
        super(props);
        this.state = { files: [] }
    }

    onDrop(files) {
        this.setState({ files: files });
    }

    confirm(){
        /*var file = this.state.files[0];
        if(!file) return;
        request
            .post('/api/transform')
            .send(file)
            .set('Cache-Control', 'no-cache')
            .set('Accept', 'application/image')
            .end(function(err, res){
                // Calling the end function will send the request
            });*/
    }

    cancel(){
        this.setState({ files: [] });
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        title='This is a way to play "Game of Life" on a random image inside a browser'
                        subtitle='Let&#39;s try and see what&#39;s up'
                        actAsExpander={false}
                        showExpandableButton={false}
                        />
                    <CardActions>
                        <RaisedButton
                            label='Confirm' 
                            labelPosition='before'
                            primary={true}
                            style={{margin: 12}}
                            icon={<DoneIcon />}
                            disabled={this.state.files <= 0}
                            onClick={this.confirm.bind(this)}/>

                        <RaisedButton
                            label='Cancel' 
                            labelPosition='before'
                            secondary={true}
                            style={{margin: 12}}
                            icon={<CancelIcon />}
                            disabled={this.state.files <= 0}
                            onClick={this.cancel.bind(this)}/>

                    </CardActions>
                    <div style={{ margin: '20px' }}>
                        <Dropzone style={{
                                width: '100%',
                                height: 500,
                                borderWidth: 2,
                                borderColor: '#666',
                                borderStyle: 'dashed',
                                borderRadius: 5,
                                display: this.state.files.length > 0 ? 'none':'block' 
                            }}
                            rejectStyle={{
                                borderStyle: 'solid',
                                backgroundColor: '#ffdddd'
                            }}
                            onDrop={this.onDrop.bind(this)}
                            multiple={false}
                            minSize={256}
                            maxSize={6000000}
                            accept={'image/*'}
                            disableClick={true} >

                            <div style={{ margin: '20px'}} ><b>Hey!</b><br/><br/> drop some image here </div>
                        </Dropzone>
                        <div>
                            <DropdownStats files={this.state.files} />
                        </div>
                    </div>

                    <CardText expandable={false}></CardText>
                </Card>
            </div>
        )
    }
}

class DropdownStats extends Component {
    constructor(props) {
        super(props);
        this.state = { files: this.props.files }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ files: nextProps.files });
    }

    render() {
        return this.props.files.length > 0 ?
            (<div style={{ margin: '20px' }}>
                <img src={this.state.files[0].preview} className={'resize'} />
            </div>) : null
    }
}