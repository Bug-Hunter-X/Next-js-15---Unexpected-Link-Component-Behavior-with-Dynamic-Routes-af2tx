```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleRouteChange = (href) => {
    router.push(href);
  };

  return (
    <div>
      <button onClick={() => handleRouteChange('/about')}>
        About Us
      </button>
    </div>
  );
}

export default MyComponent;
```