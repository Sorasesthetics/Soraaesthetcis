import Container from "../../ui/Container"

const AddOnsSection = () => {
  return (
    <section className="relative w-full">
        

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/addons-bg.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 py-24">
        <Container>

          <h2 className="text-center text-[40px] font-semibold text-[var(--color-secondary)] mb-14">
            Add-Ons
          </h2>

          <div className="flex flex-col lg:flex-row gap-10 justify-center">

            {/* Card 1 */}
            <div className="backdrop-blur-xl bg-white/35 border border-white/30 rounded-[40px] p-10 w-full max-w-[520px] text-white">
              <h4 className="text-2xl font-semibold mb-6 text-[var(--color-secondary)]">
                Dermaplaning
              </h4>

              <p className="text-white/80 mb-8 leading-relaxed">
                Gently removes dead skin and peach fuzz to reveal smoother,
                brighter skin and allow products to penetrate more effectively.
              </p>

              <div className="flex items-center justify-between">
                <span className="text-white/80">
                  60 min • <span className="text-[var(--color-secondary)]">$15</span>
                </span>

                <button className="bg-white/20 px-6 py-2 rounded-full hover:bg-white/30 transition text-[var(--color-secondary)]">
                  Add Now
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="backdrop-blur-xl bg-white/35 border border-white/30 rounded-[40px] p-10 w-full max-w-[520px] text-white">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--color-secondary)]">
                Red LED Light Therapy
              </h3>

              <p className="text-white/80 mb-8 leading-relaxed">
                Helps calm inflammation, promote healing, and support collagen production.
                Ideal for acne, sensitivity, and post-treatment recovery.
              </p>

              <div className="flex items-center justify-between">
                <span className="text-white/80">
                  60 min • <span className="text-[var(--color-secondary)]">$15</span>
                </span>

                <button className="bg-white/20 px-6 py-2 rounded-full hover:bg-white/30 transition text-[var(--color-secondary)]">
                  Add Now
                </button>
              </div>
            </div>

          </div>

        </Container>
      </div>
    </section>
  )
}

export default AddOnsSection