const ServiceCard = ({ service }) => {
  return (
    <div
      key={service.id}
      className="group relative rounded-[30px] overflow-hidden cursor-pointer transition-all duration-500"
    >
      {/* IMAGE */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* BASE DARK LAYER (always visible slight dim) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* HOVER DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* DEFAULT TITLE */}
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0">
        <h4 className="text-white text-2xl font-semibold text-center px-6">
          {service.title}
        </h4>
      </div>

      {/* HOVER CONTENT */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-white">

        <div>
          <h3 className="text-3xl font-semibold mb-4">
            {service.title}
          </h3>

          <p className="text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          {/* BADGE */}
          {service.badge && (
            <div className="bg-[var(--color-primary-soft)] text-black text-sm px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4">
              <span>{service.badge.icon}</span>
              {service.badge.text}
            </div>
          )}

          {/* BEST FOR */}
          {service.bestFor && (
            <div className="border-t border-white/30 pt-4 mt-4">
              <p className="text-[#FFA1AD] font-medium mb-2">
                ✨ Best for:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {service.bestFor.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* RESTRICTIONS */}
          {service.restrictions && (
            <div className="border-t border-white/30 pt-4 mt-4">
              <ul className="list-disc list-inside text-sm space-y-2">
                {service.restrictions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm">
            {service.duration} •{" "}
            <span className="text-[#FFA1AD] font-semibold">
              {service.price}
            </span>
          </span>

          <button className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full hover:bg-white/30 transition-all duration-300">
            Book Now
          </button>
        </div>

      </div>
    </div>
  )
}

export default ServiceCard