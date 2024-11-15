import config from "@/config";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-base-200 w-full">
      <div className="relative pb-16 pt-6 sm:pb-24">
        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{config.appName}</span>{" "}
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-base-content/70 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              {config.appDescription}
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href={config.auth.loginUrl}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary-focus md:px-10 md:py-4 md:text-lg"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
