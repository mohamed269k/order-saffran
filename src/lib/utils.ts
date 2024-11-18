import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

5. `src/app/page.tsx`
```tsx
import SaffranWebsite from '@/components/website'

export default function Home() {
  return <SaffranWebsite />
  }
