import { useState, useEffect } from "react"
import Container from "../../ui/Container"
import { brand } from "../../../config/brand"
import { useTranslation } from "react-i18next"
import AddReview from "./AddReview"
import "./reviews-mobile.css"

const Reviews = () => {
  const { t } = useTranslation()
  const reviewsData = brand.data.reviews

  const [reviews, setReviews] = useState([])
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fallbackReviews = reviewsData.items.map((item) => ({
    id: item.id,
    name: t(`reviews.${item.id}.name`),
    content: t(`reviews.${item.id}.text`),
    rating: Number(t(`reviews.${item.id}.rating`)),
  }))

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8001/api/reviews/")
        if (!response.ok) throw new Error("Failed to fetch reviews")
        const data = await response.json()
        if (Array.isArray(data) && data.length > 0) {
          setReviews(data)
        } else {
          setReviews(fallbackReviews)
        }
      } catch (error) {
        console.error("Error fetching reviews:", error)
        setReviews(fallbackReviews)
      }
    }

    fetchReviews()
  }, [t])

  useEffect(() => {
    if (paused || reviews.length === 0) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [paused, reviews.length])

  if (reviews.length === 0) return null

  const firstReview = reviews[current]
  const secondReview = reviews[(current + 1) % reviews.length]

  return (
    <section className="py-20 lg:py-32 bg-[#FFFEFC] overflow-hidden">
      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-[86px] leading-[1.05] lg:leading-[0.95] font-semibold text-[var(--color-primary-soft)] mb-8 lg:mb-12 whitespace-pre-line">
              {t("reviews.title")}
            </h2>

            <p className="text-lg sm:text-xl lg:text-[36px] leading-[1.6] text-[#7A7472] max-w-[500px] mx-auto lg:mx-0">
              {t("reviews.subtitle")}
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 lg:mt-10 bg-[var(--color-primary)] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:opacity-90 transition text-sm sm:text-base"
            >
              {t("reviews.leaveButton")}
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            {/* MOBILE + TABLET */}
            <div className="reviews-mobile-wrapper relative w-full lg:hidden">

              {/* background image */}
              <img
                src={reviewsData.backgroundImage}
                alt=""
                className="reviews-mobile-bg w-full object-cover rounded-[30px]"
              />

              {/* overlay reviews */}
              <div className="reviews-mobile-overlay absolute inset-0 flex flex-col justify-center">

                <ReviewCard review={firstReview} />

                <ReviewCard review={secondReview} />

              </div>

            </div>

            {/* DESKTOP ORIGINAL */}
            <div className="hidden lg:block relative w-[520px] h-[800px]">

              <img
                src={reviewsData.backgroundImage}
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative bg-white p-6 sm:p-10 rounded-3xl w-[500px] max-w-[90%] z-10 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-[var(--color-primary-soft)]">
              {t("reviews.modalTitle")}
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
      onMouseEnter={() => setPaused?.(true)}
      onMouseLeave={() => setPaused?.(false)}
      className={`${position ? positionStyles : ""}
      review-card
      w-full lg:w-[650px]
      bg-[#5A4A43]/60
      backdrop-blur-xl
      text-white
      rounded-[30px] lg:rounded-[40px]
      p-6 sm:p-8 lg:p-10
      shadow-2xl
      transition-transform duration-500
      hover:scale-105`}
    >

      <h4 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6">
        {review.name}
      </h4>

      <p className="text-sm sm:text-base leading-relaxed mb-6 lg:mb-8">
        {review.content}
      </p>

      <div className="flex justify-center gap-4 lg:gap-6 text-xl lg:text-2xl">
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
