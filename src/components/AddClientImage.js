import React, { Component } from 'react'
import ProfileUpload from './ProfileUpload'

class AddClientUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profilePicture: '',
            imageSrc: '',
        }
    }
    getUploadedImage = imagetosave => {
        this.setState({ profilePicture: imagetosave })
    }
    getdataImage = src => {
        this.setState({ imageSrc: src }, () => {})
    }
    addClientUser = e => { //call this function to send image on backend
        e.preventDefault()
        const { profilePicture } = this.state
        let dataForm = new FormData() //convert into data into binary form before send it to api request
        dataForm.append('profile_picture', profilePicture)
        let payload = {
            updatedData: {
                dataForm: dataForm,
                imageSrc: this.state.imageSrc,
            },
        }
        this.props.addClientUser(payload) //api call
        this.props.close()
    }
    render() {
        const { imageSrc} = this.state
        const { close } = this.props

        return (
            <div>
               <ProfileUpload
                  profilePicture={profilePicture}
                  getUploadedImage={getUploadedImage}
                  getdataImage={getdataImage}
                  userImg1Src={userImg1Src}
                />
            </div>
        )
    }
}

export default AddClientUser