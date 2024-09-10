import React from 'react';
import { PhotosDetailsProps } from '@/app/types';

const PhotosDetails = ({ params }: PhotosDetailsProps) => {
  return (
    <div>
      Photos Details {params.id}-{params.photosID}
    </div>
  );
};

export default PhotosDetails;
