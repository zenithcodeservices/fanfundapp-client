import Link from 'next/link'

function FooterLinkColumn({ header, items }) {
  return (
    <div className="w-full my-8 lg:my-0 lg:w-4/12 px-4 ml-auto">
      <span className="block text-base font-semibold mb-2">
        {header}
      </span>
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link} passHref>
              <a
                style={{ textDecoration: 'none' }}
                className="hover:text-palette-primary font-normal block text-sm text-white py-2">
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinkColumn