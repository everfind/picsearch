import { useDefaultPictures } from '../../lib/picture';
import { PictureList } from '../../components/picture-list';

export function CuratedPictures() {
  const defaultPictures = useDefaultPictures();
  return <PictureList pictureList={defaultPictures} />;
}
