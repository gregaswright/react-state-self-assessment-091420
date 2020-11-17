import React, {Component} from 'react'
import {yes, no} from './objects'



class YesNo extends Component {
    yesObject = {yes}
    noObject = {no}

    state = {
        statement: this.noObject.no["no-statement"],
        img: this.noObject.no["no-image"]
    }

    imgClickHandler = () => {
        if (this.state.img == this.noObject.no["no-image"]) {
            this.setState({
                statement: this.yesObject.yes["yes-statement"],
                img: this.yesObject.yes["yes-image"]
            })
        } else if (this.state.img == this.yesObject.yes["yes-image"]) {
            this.setState({
                statement: this.noObject.no["no-statement"],
                img: this.noObject.no["no-image"]
            })
        }
    }


    render() {
        console.log(this.yesObject)
        console.log(this.noObject.no["no-image"])
        return (
        <div>
            <h1>{this.state.statement}</h1>
            <img onClick={this.imgClickHandler} src={this.state.img}></img>
        </div>
        )
    }
}

export default YesNo