import { useEffect, useState } from "react"
import Container from "../../ui/Container"

const GallerySection = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8001/gallery/")
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <section className="py-24 bg-white">
      <Container>

        {/* HEADER */}
        <div className="flex justify-between items-center mb-14 px-14">
          <h2 className="text-[56px] text-[var(--color-primary-soft)] font-semibold">
            Gallery
          </h2>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-secondary)] text-[var(--color-text-main)] px-8 py-3 rounded-full flex items-center gap-3 hover:opacity-90 transition"
          >
            <img
              src="/instagram.svg"
              alt=""
              className="w-6 h-6 shrink-0"
            />
            View more on Instagram
          </a>
        </div>

        {/* GRID */}
        <div className="flex flex-wrap gap-6 justify-center">
          {images.map((item, index) => (
            <div
              key={index}
              className="w-[241.6px] h-[241.6px] rounded-[24px] overflow-hidden group cursor-pointer"
            >
              <img
                src={item.media_url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default GallerySection