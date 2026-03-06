import Container from "../../ui/Container"

const PoliciesBar = () => {
  return (
    <div className="bg-[var(--color-secondary)] py-6">
      <Container>
        <div className="flex flex-col lg:flex-row items-left justify-between gap-3 text-white text-medium "> 

          <div className="flex items-left gap-6 flex-wrap justify-center">
            <span>Consistency is key for best results</span>
            <span>
                <img
                    src="/white-heart.svg"
                    alt=""
                    className="w-6 h-6  shrink-0"
                  />
                  </span>
            <span>Results vary based on skin type and consistency</span>
             <span>
                <img
                    src="/white-heart.svg"
                    alt=""
                    className="w-6 h-6  shrink-0"
                  />
                  </span>
            <span>Consultation form required prior to service</span>
            
          </div>
 <span>
                <img
                    src="/white-heart.svg"
                    alt=""
                    className="w-6 h-6  shrink-0"
                  />
                  </span>
          <button className="bg-[var(--color-tertiary)]/60 text-white px-6 py-3 rounded-[19px] font-medium hover:opacity-90 transition">
            Read Full Policies
          </button>

        </div>
      </Container>
    </div>
  )
}

export default PoliciesBar