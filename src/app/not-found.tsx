// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here</p>
        <p>
          Use the search box or the links below to explore our amazing
          application
        </p>
        <input type='search' placeholder='Just a dummy search box...' />
        <div>
          <Link href='/'>Homepage</Link>
          <Link href='/latest'>Latest Products</Link>
          <Link href='/contact'>Contact Us</Link>
        </div>
      </div>
    </>
  );
}