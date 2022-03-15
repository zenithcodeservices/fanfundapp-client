import{ classNames } from '../utils/helpers'

function NavRightButton({ text, layout }) {
  return (
    <a
      href="https://gum.co/DsAsk"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
      className={classNames(
        layout === 'desktop' ? 'px-4 py-2' : 'px-6 py-3',
        'bg-palette-primary rounded-md text-black font-medium hover:bg-palette-dark'
      )}      
    >
      {text}
    </a>
  )
}

export default NavRightButton
