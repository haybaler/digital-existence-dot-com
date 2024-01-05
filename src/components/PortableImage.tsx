import Image from "next/legacy/image";
import { urlForImage } from "../../sanity/lib/image";

const SingleImageSection = ({ data, inline }: any) => {
  const url = urlForImage(data);
  return (
    <div className="blog_feature_image">
      <Image
        src={url}
        className="wp-post-image"
        alt={data?.altText}
        width={750}
        height={400}
      />
    </div>
  );
};

export default SingleImageSection;
