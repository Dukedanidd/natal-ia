import Link from "next/link";
import config from "@/config";

const About = () => {
  return (
    <main className="flex flex-col w-full min-h-screen bg-base-100">
      <div className="max-w-xl mx-auto p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">About {config.appName}</h1>

        <div className="prose prose-lg">
          <p>
            Welcome to {config.appName}! We are passionate about helping
            developers and entrepreneurs build their projects faster.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to accelerate development by providing a robust
            boilerplate that includes all the essential features modern web apps
            need, allowing you to focus on building your unique product.
          </p>

          <p>
            Have questions? We&apos;d love to hear from you. Send us a message
            at {config.email.supportEmail}.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
