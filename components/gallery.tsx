import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function Gallery() {

    return (
        <div id={"gallery"}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry gutter='50px'>
                    <img src="/gallery/SaunaEingang.jpg" alt="" loading={"lazy"} />
                    <img src="/gallery/Holzofen.jpg" alt="" loading={"lazy"} />
                    <img src="/gallery/Saunaraum.jpg" alt="" loading={"lazy"} />
                    <img src="/gallery/Eingangsbereich.jpg" alt="" loading={"lazy"} />
                    <img src="/gallery/Innenbereich.jpg" alt="" loading={"lazy"} />
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}