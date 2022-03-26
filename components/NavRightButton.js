import{ classNames } from '../utils/helpers'

function NavRightButton({ text, layout }) {
  return (
    <a
      href="/login?signup=1 "
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
