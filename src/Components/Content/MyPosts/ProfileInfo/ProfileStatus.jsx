import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status

    };

    activatedEditMode = () => {
        this.setState({
            editMode: true
        });

    };

    deactivatedEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    };


    handleFocus = (event) => {
        event.target.select();
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
            <span onDoubleClick={this.activatedEditMode}>
                {this.props.status || '---'}
            </span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           onMouseOut={this.deactivatedEditMode}
                           autoFocus={true}
                           onBlur={this.deactivatedEditMode}
                           value={this.state.status}/>
                </div>
                }
            </>
        )
    }

}

export default ProfileStatus;