function Subscribe() {

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Submitted!')
  }
  
  return (
    <form className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center" onSubmit={handleSubmit}>
      <input
        className="border border-r-0 border-palette-light rounded-l-lg w-2/3
              focus:outline-none focus:ring-1 focus:ring-palette-primary"
        type="text"
        placeholder="Your email here"
      />
      <button
        type="submit"
        className="py-3 px-4 bg-palette-primary hover:bg-palette-dark text-gray-800 text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-palette-primary"
      >
        Subscribe
      </button>
    </form>
  )
}

export default Subscribe
