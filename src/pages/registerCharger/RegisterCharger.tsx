import PhotoRegister from "@/components/common/photoRegister/PhotoRegister";
import React, { useState } from "react";

export default function RegisterCharger() {
  const [photos, setPhotos] = useState<File[]>([]);
  console.log(photos);
  return (
    <div>
      RegisterCharger
      <PhotoRegister photos={photos} updatePhotos={setPhotos} />
    </div>
  );
}
