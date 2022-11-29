import data from './data/images.json';
import { useRouter } from 'next/router'

interface ResponsiveImageProps {
    src: string
    alt: string
    className?: string
    lazy?: boolean
    isStatic?: boolean
}

function isShown(src: string, range: number, path: string): boolean {
    // @ts-ignore
    if (data[path] === undefined) {
        return false;
    }
    // @ts-ignore
    if (data[path][src] === undefined) {
        return false;
    }
    // @ts-ignore
    if (data[path][src][range] === undefined) {
        return false;
    }
    // @ts-ignore
    return data[path][src][range].width > 0
}

function getWidth(src: string, range: number, path: string): number {
    // @ts-ignore
    return data[path][src][range].width;
}

function getHeight(src: string, range: number, path: string): number {
    // @ts-ignore
    return data[path][src][range].height;
}

export default function ResponsiveImage({ src, alt, className, lazy = true, isStatic = false }: ResponsiveImageProps) {
    let router = useRouter()
    let path = isStatic ? "static" : router.asPath.split("#")[0]
    let srcSplits = src.split('/');
    const srcPath = srcSplits.slice(0, -1).join('/');
    let fileName = srcSplits.pop()?.split('.')[0];
    let fileFormats = [
        "avif",
        "webp",
    ]

    let ranges = [
        414,
        640,
        768,
        896,
        1024,
        1280,
        1536,
        1920,
    ]

    const sources = fileFormats.map((fileFormat) => {
        return ranges.filter((range) => isShown(src, range, path)).map((range) =>
            <source
                key={`${fileName}-${range}-${fileFormat}-${path}`}
                media={`(max-width: ${range - 1}px)`}
                srcSet={`${srcPath}/magick/${fileName}-${getWidth(src, range, path)}.${fileFormat}`}
                width={getWidth(src, range, path)}
                height={getHeight(src, range, path)}
                type={`image/${fileFormat}`}
            />
        );
    });

    const blankSources = ranges.filter((range) => !isShown(src, range, path)).map((range) =>
        <source
            key={`${fileName}-${range}-${path}`}
            media={`(max-width: ${range - 1}px)`}
            srcSet={`blank.png`}
            width={1}
            height={1}
        />
    );


    return (
        <picture>
            {   // @ts-ignore
                data[path] !== undefined ? (
                    <>
                        {blankSources}
                        {sources}
                    </>
                ) : (
                    <></>
                )}
            {lazy ? (
                <img src={src} alt={alt} loading={"lazy"} className={className} />
            ) : (
                <img src={src} alt={alt} className={className} />
            )
            }
        </picture>
    )
}