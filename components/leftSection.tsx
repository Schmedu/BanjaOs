export default function leftSection() {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative z-10 ">
                        <div className="relative h-64 sm:h-80">
                            <img alt="House" src="gallery/Holzofen.jpg" className="absolute inset-0 h-full w-full object-cover object-bottom rounded-3xl" />
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center ">
                        <div className="p-8 sm:p-16 lg:p-24 text-center lg:text-left">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Holzofensauna
                            </h2>
                            <p className="mt-4">
                                Genießen Sie trockene Luft, die nur ein Holzofen erzeugen kann.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}