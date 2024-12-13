import { Link } from './Link';
import { Text } from './Text';

export function Banner() {
  return (
    <div className="bg-gradient py-3">
      <div className="container flex justify-center">
        <p className="flex gap-1 font-medium">
          <Text />
          <Link href="#">View the complete Kit</Link>
        </p>
      </div>
    </div>
  );
}
