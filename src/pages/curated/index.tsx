import { useDefaultPictures } from '../../lib/picture';
import { PictureList } from '../../components/picture-list';

export function CuratedPictures({ className }: { className?: string }) {
  const defaultPictures = useDefaultPictures();
  return (
    <div className={className}>
      <PictureList pictureList={defaultPictures} />
    </div>
  );
}
