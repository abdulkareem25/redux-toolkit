
const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <img src={photo.urls.small} alt={photo.alt_description} />
      <p>{photo.description || photo.alt_description || "No description"}</p>
    </div>
  )
}

export default PhotoCard
