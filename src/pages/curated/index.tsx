import { useDefaultPictures } from '../../lib/picture';
import { PictureList } from '../../components/picture-list';
import cls from 'clsx';

export function CuratedPictures({ className }: { className?: string }) {
  const defaultPictures = useDefaultPictures();
  return (
    <div className={cls('pt-2', className)}>
      <PictureList pictureList={defaultPictures} />
    </div>
  );
}
