import React, { Component } from 'react'
import { profile } from '../assets/images/users/user1.jpg'
import { IMAGE_CROP_OBJ_SQUARE } from '../Utils/constants'
import ThumbnailEditorModal from './ThumbnailEditorModal'

class ProfileUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
            userImg1Src: this.props.userImg1Src || '',
            profilePicture: this.props.profilePicture,
            imageId: null,
        }
    }

    openUploadModal = field => {
        this.setState({
            isModalOpen: true,
            imageId: field,
        })
    }

    closeUploadModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    UNSAFE_componentWillReceiveProps = nextProps => {
        this.setState({
            userImg1Src: nextProps.userImg1Src,
            profilePicture: nextProps.profilePicture,
        })
    }
    getSrcFunction = reader => {
        if (this.state.imageId === 'image1') {
            this.setState(
                {
                    userImg1Src: reader.result,
                },
                () => {
                    this.props.getdataImage(this.state.userImg1Src)
                }
            )
        }
    }

    clearImageState() {
        this.setState({
            userImg1Src: '',
        })
    }
    getBase64 = file => {
        let reader = new FileReader()
        reader.addEventListener(
            'load',
            () => {
                this.getSrcFunction(reader)
            },
            false
        )
        if (file) {
            reader.readAsDataURL(file)
        }
    }
    handleSave = (thumbnailId, formTosave, imageTosave) => {
        if (this.state.imageId === 'image1') {
            this.setState({
                profilePicture: imageTosave,
            })
            this.props.getUploadedImage(imageTosave)
            this.getBase64(imageTosave)
        }

        this.closeUploadModal()
    }
    render() {
        const { isModalOpen, userImg1Src, profilePicture } = this.state
        return (
            <div>
                <div
                    onClick={() => this.openUploadModal('image1')}
                    className="action-icon"
                >
                    <div className="upload-text">Upload User Image</div>
                    {profilePicture ? (
                        <img
                            src={userImg1Src || profilePicture || profile}
                            alt="profilepicture"
                            className="image-view"
                        />
                    ) : (
                        <div className="browse-icon">
                            <img
                                src={profile}
                                alt="profilepicture"
                                className="image-view"
                            />
                        </div>
                    )}
                </div>

                <div>
                    {isModalOpen && (
                        <ThumbnailEditorModal
                            isModalOpen={isModalOpen}
                            thumbnailImg={profilePicture}
                            userImg1Src={userImg1Src}
                            editCancel={() => this.closeUploadModal()}
                            handleSave={(id, form, test) =>
                                this.handleSave(id, form, test)
                            }
                            imgCropObj={IMAGE_CROP_OBJ_SQUARE}
                            modalClass="create-user-modal"
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default ProfileUpload