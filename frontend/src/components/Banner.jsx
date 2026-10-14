
import '../styles/Banner.css'

function Banner({ image, children }) {
  return (
    <section
      className="banner"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
          url(${image})
        `
      }}
    >
      {children}
    </section>
  )
}

export default Banner
