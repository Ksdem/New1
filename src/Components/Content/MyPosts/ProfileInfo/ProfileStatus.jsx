import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activatedEditMode() {
        this.setState({
            editMode: true
        })
    };

    deactivatedEditMode() {
        this.setState({
            editMode: false
        })
    };

    handleFocus(event) {
        event.target.select();
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
            <span onDoubleClick={this.activatedEditMode.bind(this)}>
                {this.props.status}
            </span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onMouseOut={this.deactivatedEditMode.bind(this)}
                        // onFocus={this.handleFocus.bind(this)}
                           autoFocus={true}
                           onBlur={this.deactivatedEditMode.bind(this)}
                           value={this.props.status}/>
                </div>
                }
            </>
        )
    }

}

export default ProfileStatus;