import Image, { StaticImageData } from "next/image";

export interface ImageData {
  id: string;
  img: StaticImageData;
  caption?: string;
}

interface ImageSectionProps {
  data: Array<ImageData>;
  width: string;
  separate: boolean;
  frame?: boolean;
}

const ImageSection = ({ data, width, separate, frame }: ImageSectionProps) => {
  const wrapperClasses = frame ? "img-wrapper img-frame" : "img-wrapper";

  return (
    <div className="inline-section">
      {separate ? (
        data.map((imgData) => (
          <div
            key={imgData.id}
            className={wrapperClasses}
            style={{ width: width }}
          >
            <Image key={imgData.id} src={imgData.img} alt="" />
            {imgData.caption !== "" ? (
              <p className="caption">{imgData.caption}</p>
            ) : (
              <></>
            )}
          </div>
        ))
      ) : (
        <div className={wrapperClasses} style={{ width: width }}>
          {data.map((imgData: ImageData) => (
            <>
              <Image key={imgData.id} src={imgData.img} alt="" />
              {imgData.caption !== "" ? (
                <p className="caption">{imgData.caption}</p>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSection;
