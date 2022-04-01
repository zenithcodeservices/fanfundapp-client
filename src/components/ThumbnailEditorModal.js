import React, { Component } from 'react'
import ImageResizer from './ImageResizer'
import Modal from 'react-responsive-modal'
import 'react-image-crop/dist/ReactCrop.css'
import { SITE_TXT, ENTER_KEY_CODE, BG } from '../Utils/constants'

class ThumbnailEditorModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: this.props.isModalOpen,
            thumbnailImg: this.props.thumbnailImg,
            thumbnailImgSrc: null,
            crop: this.props.imgCropObj,
            croppedImg: null,
            originalImg: null,
            userImg1Src: this.props.userImg1Src || '',
            thumbImages: this.props.thumbImages || null,
            imageId: this.props.imageId || null,
            inEdit: false,
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            thumbImages: nextProps.thumbImages,
        })
    }
    onCloseModal = () => {
        this.props.editCancel()
    }

    clickToBrowse = () => {
        this.browseFile.click()
    }

    handleFile = e => {
        this.setState({ inEdit: true })
        if (e.target.files.length === 0) {
            alert(SITE_TXT.TXT_INVALID_FILE_EXT)
            return
        }
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader()
            reader.addEventListener(
                'load',
                () =>
                    this.setState({
                        thumbnailImgSrc: reader.result,
                    }),
                false
            )
            reader.readAsDataURL(e.target.files[0])

            this.setState({ originalImg: e.target.files[0] })
        }
    }

    // saveOriginal = () => {
    //     const { thumbnailId, originalImg } = this.state
    //     this.props.handleSave(thumbnailId, this.formElemThumb, originalImg)
    // }

    clickTick() {
        const { thumbnailId, croppedImg } = this.state
        this.props.handleSave(
            thumbnailId,
            this.formElemThumb,
            croppedImg !== null ? croppedImg : this.state.originalImg
        )
    }

    enterKeyHandler = e => {
        if (e.which === ENTER_KEY_CODE) {
            this.clickTick()
        }
    }

    componentDidMount() {
        this.setState({ origImg: this.origImg })
    }

    getResizedImg(fileObj) {
        this.setState({ croppedImg: fileObj })
    }

    render() {
        const {
            isModalOpen,
            thumbnailImgSrc,
            thumbnailImg,
            crop,
            inEdit,
        } = this.state

        const { modalClass } = this.props
        const styleClasses = {
            modal: `modal-custom  ${modalClass ? modalClass : ''}`,
            overlay: 'overlay-custom',
            closeButton: 'closeBtn-custom',
        }
        const {
            TXT_CLICK_TOADD_IMAGE,
            TXT_CLICK_TOCHANGE_IMAGE,
            TXT_CREATE_USER_FILES_ACCEPTED,
            TXT_SAVE,
            TXT_CANCEL,
        } = SITE_TXT

        return (
            <Modal
                open={isModalOpen ? isModalOpen : false}
                onClose={this.onCloseModal}
                center
                classNames={styleClasses}
                styles={BG}
            >
                <div className="editable-item-modal">
                    <form
                        encType="multipart/form-data"
                        ref={elemThumb => (this.formElemThumb = elemThumb)}
                    >
                        <input
                            type="file"
                            ref={ele => (this.browseFile = ele)}
                            onChange={e => this.handleFile(e)}
                            accept={TXT_CREATE_USER_FILES_ACCEPTED}
                        />

                        {!inEdit ? (
                            <span>
                                {thumbnailImg ? (
                                    <span
                                        className="img-span"
                                        onClick={() => this.clickToBrowse()}
                                    >
                                        <img
                                            ref={elem => (this.origImg = elem)}
                                            alt="BrowseImageHere"
                                            src={
                                                this.state.userImg1Src ||
                                                thumbnailImg
                                            }
                                        />
                                        <label>
                                            {TXT_CLICK_TOCHANGE_IMAGE}
                                        </label>
                                    </span>
                                ) : (
                                    <span
                                        className="iconSpan"
                                        onClick={() => this.clickToBrowse()}
                                    >
                                        <label>{TXT_CLICK_TOADD_IMAGE}</label>
                                    </span>
                                )}
                            </span>
                        ) : (
                            thumbnailImgSrc && (
                                <ImageResizer
                                    className="img-span"
                                    origImg={thumbnailImg}
                                    crop={crop}
                                    quality={0.5} //this could be made more adjustable if required
                                    imgDataUrl={thumbnailImgSrc}
                                    getResizedImg={data =>
                                        this.getResizedImg(data)
                                    }
                                />
                            )
                        )}
                    </form>

                    <div className="overlay-icons">
                        <button
                            className="save-btn btn-primary text-uppercase "
                            onClick={() => this.clickTick()}
                        >
                            {TXT_SAVE}
                        </button>

                        <button
                            className="save-btn text-uppercase cancel-bg"
                            onClick={() => this.onCloseModal()}
                        >
                            {TXT_CANCEL}
                        </button>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ThumbnailEditorModal