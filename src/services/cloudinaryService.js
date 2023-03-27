import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const myImage = new CloudinaryImage("sample", {
  cloudName: "doyj9avxq",
}).resize(fill().width(300).height(300));

return (
  <div>
    <AdvancedImage cldImg={myImage} />
  </div>
);
