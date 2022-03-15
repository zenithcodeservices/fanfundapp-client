import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialIcon({icon, url}) {
  return (
    <a
      className="appearance-none"
      type="button" 
      aria-label="social-icon"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon className="text-palette-primary w-6 inline-flex transform hover:scale-110 ease-in duration-150" icon={icon} />
    </a>
  )
}

export default SocialIcon
