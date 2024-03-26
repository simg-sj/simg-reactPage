import React from "react";

const NotFound : React.FC = () => {
    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="text-indigo-600 font-semibold">
                        404 Error
                    </h3>
                    <p className="text-gray-800 text-4xl font-semibold sm:text-4xl">
                        페이지를 찾을 수 없습니다
                    </p>
                    <p className="text-gray-600">
                        죄송합니다. 찾으시는 페이지를 찾을 수 없거나 삭제되었습니다.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a href="/" className="block py-2 px-4 text-white font-medium bg_base duration-150 hover:bg-indigo-500 active:bg_base rounded-lg">
                            돌아가기
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NotFound;
