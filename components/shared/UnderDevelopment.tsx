import React from "react";

const UnderDevelopment = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#0d121c] px-7 py-10 md:px-12 md:py-14 text-white shadow-lg">
            {/* Vision-style radial gradients */}

            <div className="relative z-10 flex flex-col items-center">
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-6 animate-pulse"
                >
                    <path
                        d="M12 2L2 7v7c0 5 5 8 10 8s10-3 10-8V7l-10-5z"
                        stroke="#6366f1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12 14v-4"
                        stroke="#6366f1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="12" cy="17" r="1" fill="#6366f1" />
                </svg>
                <h1 className="text-3xl font-bold mb-2 text-center">
                    Page Under Development
                </h1>
                <p className="text-lg text-blue-200/75 mb-4 text-center">
                    We&apos;re working hard to bring you this feature. Please
                    check back soon!
                </p>
                <div className="mt-4 w-full flex justify-center">
                    <span className="inline-block px-4 py-2 bg-white/3 border border-blue-300/15 rounded-full text-sm font-medium text-blue-200 shadow-md text-center">
                        DigitioHub Team
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UnderDevelopment;
