import Link from 'next/link'

const CustomLink = ({ href, children, ...props }) => {
  return (
    <>
      {href.includes('#') ? (
        <a href={href} {...props}>
          {children}
        </a>
      ) : (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    </>
  )
}

export default CustomLink
