import { useEffect, useState } from 'react';
import Link from 'next/link';
import jsonData from '../data.json';

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

  const {
    name,
    occupation,
    bio,
    contacts: { github, email, twitter, instagram },
    footer: { madeByText, author, fontClass },
  } = jsonData;

  return (
    <div
      key="1"
      className={`bg-gradient-to-r from-[#202F3F] via-black to-[#102F2F] text-white min-h-screen flex flex-col justify-center items-center ${
        isVisible || !animationFinished ? 'visible' : 'hidden'
      }`}
    >
      <h1 className="text-6xl font-bold mb-2 bg-gradient-to-r from-gray-400 via-gray-500 to-white text-transparent bg-clip-text text-center">
        {name}
      </h1>
      <h2 className="text-4xl font-light mb-4 bg-gradient-to-r from-white via-gray-500 to-gray-900 text-transparent bg-clip-text">
        {occupation}
      </h2>
      <hr className="border-gray-700 w-full max-w-lg mb-8" />
      <p className="mb-8 text-center max-w-lg text-[#AEB2B6]">{bio}</p>
      <hr className="border-gray-700 w-full max-w-lg mb-8" />
      <ul className="list-none space-y-2 text-center">
        <li>
          <Link href={github.link} className="hover:underline">
            <span className="text-white no-underline">GitHub</span>{' '}
            <span className="text-[#525355] link-with-underline">{github.username}</span>
          </Link>
        </li>
        <li>
          <Link href={email.link} className="hover:underline">
            <span className="text-white no-underline">Email</span>{' '}
            <span className="text-[#525355] link-with-underline">{email.address}</span>
          </Link>
        </li>
        <li>
          <Link href={twitter.link} className="hover:underline">
            <span className="text-white no-underline">Twitter</span>{' '}
            <span className="text-[#525355] link-with-underline">{twitter.username}</span>
          </Link>
        </li>
        <li>
          <Link href={instagram.link} className="hover:underline">
            <span className="text-white no-underline">Instagram</span>{' '}
            <span className="text-[#525355] link-with-underline">{instagram.username}</span>
          </Link>
        </li>
      </ul>

      <footer className="w-full text-center p-4 fixed bottom-0">
        <p className="text-[#AEB2B6] bg-gradient-to-r from-gray-500 via-gray-600 to-white text-transparent bg-clip-text">
          <span className="text-sm">{madeByText}</span>
          <br />
          <span className={`${fontClass} bg-gradient-to-r from-gray-500 via-gray-600 to-white text-transparent bg-clip-text`}>
            {author}
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
