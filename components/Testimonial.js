function Testimonial({review, name, jobTitle, image}) {

  return (
    <div className="w-72 bg-white shadow-lg border border-palette-lighter p-6 rounded-lg transform transition ease-in hover:scale-110 duration-200">
      <p className="text-base sm:text-lg text-gray-500 font-secondary h-32 sm:h-44">        
        {review}
      </p>
      <div className="flex items-center">
        <img
          height="80" 
          width="80"
          src={image}
          alt="testimonial-avatar-1"
          className="flex-shrink-0 h-20 w-20 rounded-full my-6 object-cover"
        />
        <div className="flex flex-col ml-4 font-primary">
          <h2 className="text leading-6 font-bold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-700">{jobTitle}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial