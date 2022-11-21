import data from './data/images.json';

interface ResponsiveImageProps {
    src: string
    alt: string
    className?: string
}

function isShown(src: string, range: number): boolean {
    // @ts-ignore
    if (data[src] === undefined) {
        return false;
    } else {
        // @ts-ignore
        if (data[src][range] === undefined) {
            return false;
        }
    }
    // @ts-ignore
    return data[src][range] > 0
}

function getWidth(src: string, range: number) {
    // @ts-ignore
    return data[src][range];
}

export default function ResponsiveImage({ src, alt, className }: ResponsiveImageProps) {
    let [fileName, originFileExtension] = src.split('.');
    let fileFormats = [
        "avif",
        "webp",
    ]

    // add the original file format to the list of file formats
    // fileFormats.push(originFileExtension)

    let ranges = [
        414,
        640,
        768,
        1024,
        1280,
        1536,
        1920,
    ]

    return (
        <picture>
            {fileFormats.map((fileFormat) => (
                <>
                    {ranges.filter((range) => isShown(src, range)).map((range) => (
                        <source
                            key={`${fileName}-${range}.${fileFormat}`}
                            media={`(max-width: ${range - 1}px)`}
                            width={getWidth(src, range)}
                            srcSet={`/images/test/${fileName}-${range}.${fileFormat}`}
                        />
                    )
                    )
                    }
                </>
            ))}
            <img src={src} alt={alt} loading={"lazy"} className={className} />
        </picture>
    )
}