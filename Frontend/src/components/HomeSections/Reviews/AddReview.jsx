import { useState } from "react"
import { useTranslation } from "react-i18next"

const AddReview = ({ onSuccess }) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
    rating: 5,
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://127.0.0.1:8001/api/reviews/add/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        alert(t("reviews.form.error"))
        return
      }

      setFormData({
        name: "",
        email: "",
        content: "",
        rating: 5,
      })

      if (onSuccess) onSuccess()
    } catch (error) {
      console.error("Error submitting review:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder={t("reviews.form.namePlaceholder")}
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        type="email"
        name="email"
        placeholder={t("reviews.form.emailPlaceholder")}
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <textarea
        name="content"
        placeholder={t("reviews.form.reviewPlaceholder")}
        value={formData.content}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <div className="flex justify-center gap-3 text-3xl">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setFormData({ ...formData, rating: star })}
            className={
              star <= formData.rating
                ? "text-yellow-400 cursor-pointer"
                : "text-gray-300 cursor-pointer"
            }
          >
            ★
          </span>
        ))}
      </div>

      <button
        type="submit"
        className="bg-[var(--color-primary)] text-white py-2 rounded hover:opacity-90 transition"
      >
        {t("reviews.form.submit")}
      </button>
    </form>
  )
}

export default AddReview
