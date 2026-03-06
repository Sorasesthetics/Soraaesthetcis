import { useState, useEffect } from "react"
import Container from "../../ui/Container"
import AddReview from "./AddReview"

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Fetch reviews from Django
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8001/api/reviews/")
        const data = await response.json()
        setReviews(data)
      } catch (error) {
        console.error("Error fetching reviews:", error)
      }
    }

    fetchReviews()
  }, [])

  // Auto slide animation
  useEffect(() => {
    if (paused || reviews.length === 0) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [paused, reviews])

  if (reviews.length === 0) return null

  const firstReview = reviews[current]
  const secondReview = reviews[(current + 1) % reviews.length]

  return (
    <section className="py-32 bg-[#FFFEFC] overflow-hidden">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-[86px] leading-[0.95] font-semibold text-[var(--color-primary-soft)] mb-12">
              CUSTOMERS<br />REVIEWS
            </h2>

            <p className="text-[36px] leading-[1.6] text-[#7A7472] max-w-[500px]">
              See what our customers think about our services
            </p>

            {/* REVIEW BUTTON */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-10 bg-[var(--color-primary)] text-white px-8 py-3 rounded-full hover:opacity-90 transition"
            >
              Leave a Review
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">
            <div className="relative w-[520px] h-[800px]">
              <img
                src="/review.jpg"
                alt=""
                className="w-full h-full object-cover rounded-[40px]"
              />

              <ReviewCard
                review={firstReview}
                position="top"
                setPaused={setPaused}
              />

              <ReviewCard
                review={secondReview}
                position="bottom"
                setPaused={setPaused}
              />
            </div>
          </div>

        </div>

      </Container>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* modal box */}
          <div className="relative bg-white p-10 rounded-3xl w-[500px] max-w-[90%] z-10 shadow-2xl">

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-center text-[var(--color-primary-soft)]">
              Leave Your Review
            </h3>

        <AddReview onSuccess={() => setIsModalOpen(false)} />

          </div>
        </div>
      )}

    </section>
  )
}

const ReviewCard = ({ review, position, setPaused }) => {
  const positionStyles =
    position === "top"
      ? "absolute top-[120px] left-[-60px]"
      : "absolute bottom-[120px] right-[-60px]"

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={`
        ${positionStyles}
        w-[650px]
        bg-[#5A4A43]/60
        backdrop-blur-xl
        text-white
        rounded-[40px]
        p-10
        shadow-2xl
        transition-transform duration-500
        hover:scale-105
      `}
    >
      <h4 className="text-2xl font-semibold mb-6">
        {review.name}
      </h4>

      <p className="text-base leading-relaxed mb-8">
        {review.content}
      </p>

      <div className="flex justify-center gap-6 text-2xl">
        {[1,2,3,4,5].map((star) => (
          <span
            key={star}
            className={
              star <= review.rating
                ? "text-yellow-400"
                : "text-white/40"
            }
          >
            ★
          </span>
        ))}
      </div>
    </div>
  )
}

export default Reviews