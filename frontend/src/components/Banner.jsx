import '../styles/Banner.css'

// Display the banner using the image and content passed through props
function Banner({ image, children }) {
  return (
    <section
      className="banner"
      style={{
        // Add a dark overlay so the content stands out against the background image
        backgroundImage: `
         linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url(${image})
        `
      }}
    >
      {children}
    </section>
  )
}

export default Banner