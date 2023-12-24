import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MyComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timeoutId = setTimeout(() => {
      setAnimationFinished(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      key="1"
      className={`bg-gradient-to-r from-[#252135] via-black to-[#201F2F] text-white min-h-screen flex flex-col justify-center items-center ${
        isVisible || !animationFinished ? 'visible' : 'hidden'
      }`}
    >
      <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-gray-400 via-gray-500 to-white text-transparent bg-clip-text text-center">
  Le Vinh Khang
</h1>
      <h2 className="text-4xl font-light mb-4 bg-gradient-to-r from-white via-gray-500 to-gray-900 text-transparent bg-clip-text">
        Developer
      </h2>
      <hr className="border-gray-700 w-full max-w-lg mb-8" />
      <p className="mb-8 text-center max-w-lg text-[#AEB2B6]">
      He’s a student from Vietnam, living in Ho Chi Minh City. the blog for documentation about his programming 🎒 journey, running on Amazon Hosting, he also loves to learning web technology; but he often forgot, that a reason why him doing the writing.
      </p>
      <hr className="border-gray-700 w-full max-w-lg mb-8" />
      <ul className="list-none space-y-2 text-center">
        <li>
        <Link href="https://github.com/levinhkhangzz" className="hover:underline">
            <span className="text-white no-underline">GitHub</span>{' '}
            <span className="text-[#525355] link-with-underline"> @levinhkhangzz</span>
          </Link>
        </li>
        <li>
          <Link href="mailto:levinhkhang631@gmail.com" className="hover:underline">
            <span className="text-white no-underline">Email</span>{' '}
            <span className="text-[#525355] link-with-underline"> levinhkhang631@gmail.com</span>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/aedotris" className="hover:underline">
            <span className="text-white no-underline">Twitter</span>{' '}
            <span className="text-[#525355] link-with-underline"> @aedotris</span>
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com/williamcachamwri" className="hover:underline">
            <span className="text-white no-underline">Instagram</span>{' '}
            <span className="text-[#525355] link-with-underline"> @williamcachamwri</span>
          </Link>
        </li>
      </ul>

      <footer className="absolute bottom-0 w-full text-center p-4">
        <p className="text-[#AEB2B6] bg-gradient-to-r from-gray-500 via-gray-600 to-white text-transparent bg-clip-text">
          <span className="text-sm">Made by</span>
          <br />
          <span className="font-aquire bg-gradient-to-r from-gray-500 via-gray-600 to-white text-transparent bg-clip-text">
            Le Vinh Khang
          </span>
        </p>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .visible {
          animation: fadeIn 1s ease-in-out;
          opacity: 1;
        }

        .hidden {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
