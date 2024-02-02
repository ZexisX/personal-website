import Link from "next/link";
import { useEffect } from "react";
import anime from "animejs";

export default function Component() {
  useEffect(() => {
    anime({
      targets: ".animate-in",
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutQuad",
      duration: 1000,
      delay: anime.stagger(100, { start: 500 }),
    });
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto py-12 animate-in">
        <BoxIcon className="mx-auto h-24 w-24 text-gray-400 hover-scale" />
        <h2 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            404 Not Found
          </span>
        </h2>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
          It seems like we lost the page you&apos;re looking for in the quantum realm. Maybe try searching for it again or navigate back to the homepage.
        </p>
        <div className="mt-6">
          <Link href="/" passHref>
            <span className="text-base font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200">
              Go back home
              <span aria-hidden="true"> &rarr;</span>
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

function BoxIcon(props) {
  return (
    <img
      {...props}
      src="https://img.icons8.com/3d-fluency/1500/1FB141/empty-box.png"
      alt="empty-box"
    />
  );
}
