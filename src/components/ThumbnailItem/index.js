import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onImageClick} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onImgClick = () => {
    onImageClick(id)
  }

  return (
    <li className="thumbnail-item">
      <button className="image-btn" type="button" onClick={onImgClick}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
