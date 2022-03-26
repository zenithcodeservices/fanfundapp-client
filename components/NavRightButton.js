import{ classNames } from '../utils/helpers'
import Link from 'next/link'

function NavRightButton({ text, layout }) {
  return (
    <Link href="/login?signup=1">
      <p
        href="/login?signup=1"
        style={{ textDecoration: 'none', cursor: 'pointer'}}
        className={classNames(
          layout === 'desktop' ? 'px-4 py-2' : 'px-6 py-3',
          'bg-palette-primary rounded-md text-black font-medium hover:bg-palette-dark'
        )}
      >
        {text}
      </p>
    </Link>
  )
}

export default NavRightButton
