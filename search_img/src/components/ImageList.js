import ImageShow from "./ImageShow";
import "./imageshow.css";
function  ImageList({images})
{ 
  const renderImages=images.map((image)=>{
    return <ImageShow 
    key={image.id} image={image} /> 
     
  }); 
  return <div className="image-list">{renderImages}
  </div>
}

export default ImageList;