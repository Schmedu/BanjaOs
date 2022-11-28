import data from './data/images.json';
import { useRouter } from 'next/router'

interface ResponsiveImageProps {
    src: string
    alt: string
    className?: string
    lazy?: boolean
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

function getSource(src: string, fileName: string, srcPath: string, range: number, path: string, fileFormat: string): string {
    // `/images/test/${fileName}-${getWidth(src, range, path)}.${fileFormat}`
    return `${srcPath}/magick/${fileName}-${getWidth(src, range, path)}.${fileFormat}`
}

export default function ResponsiveImage({ src, alt, className, lazy = true }: ResponsiveImageProps) {
    let router = useRouter()
    let path = router.asPath.split("#")[0]

    const srcPath = src.split('/').slice(0, -1).join('/');
    let [fileName, originFileExtension] = src.split('.');
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
            {blankSources}
            {sources}
            {lazy ? (
                <img src={src} alt={alt} loading={"lazy"} className={className} />
            ) : (
                <img src={src} alt={alt} className={className} />
            )
            }
        </picture>
    )
}