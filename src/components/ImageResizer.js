import React, { Component } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

class ImageResizer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: this.props.origImg,
            crop: this.props.crop,
            dataUrl: this.props.imgDataUrl,
            quality: this.props.quality,
        }
    }

    onCropChange = crop => {
        this.setState({ crop })
    }
    dataURLtoFile = (dataurl, filename) => {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], filename, { type: mime })
    }
    onCropComplete = crop => {
        this.getCroppedImg(this.state.dataUrl, crop, 'imagename.png')
    }

    getCroppedImg(imgDataUrl, pixelCrop, fileName) {
        let image = document.createElement('img')
        image.src = imgDataUrl
        const targetX = (image.width * pixelCrop.x) / 100
        const targetY = (image.height * pixelCrop.y) / 100
        const targetWidth = (image.width * pixelCrop.width) / 100
        const targetHeight = (image.height * pixelCrop.height) / 100

        const canvas = document.createElement('canvas')
        canvas.width = targetWidth
        canvas.height = targetHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(
            image,
            targetX,
            targetY,
            targetWidth,
            targetHeight,
            0,
            0,
            targetWidth,
            targetHeight
        )
        let croppedImgUrl = canvas.toDataURL(
            'image/jpeg',
            this.state.quality ? this.state.quality : 1
        )
        //dataURLtoFile(croppedImgUrl, fileName)
        this.props.getResizedImg(this.dataURLtoFile(croppedImgUrl, fileName))
    }

    componentDidMount() {
        this.setState({ origImgTag: this.props.origImgTag })
    }

    render() {
        return (
            <ReactCrop
                src={this.state.dataUrl}
                crop={this.state.crop}
                onChange={this.onCropChange}
                onComplete={this.onCropComplete}
                className="reactCropcustomStyle"
                keepSelection={true}
                minWidth={30}
            />
        )
    }
}

export default ImageResizer