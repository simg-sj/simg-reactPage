type SelectProps = {
    select : string
}
const ProgressBar = ({ select } : SelectProps) => {
    const isMobi = /Mobi/i.test(window.navigator.userAgent);
    return (
        <div className='w-full flex justify-center'>
            {
                select === "main" &&
                <div className="flex w-[250px] justify-between items-center relative z-1 before_line">
                    <div className='text-[12px] border px-4 py-2 rounded-2xl text-white bg-[#0e47a1] absoulte'>1.정보입력</div>
                    <div className='progressBorder border-[#0e47a1] absoulte'></div>
                </div>
            }
            {
                select === "calc" &&
                <div className={isMobi ? 'fixed top-0 bg-white w-full flex justify-center' : ''}>
                    <div className={isMobi ? " flex w-[250px] justify-between items-center  relative z-1 before_line pt-[70px]" : " flex w-[250px] justify-between items-center  relative z-1 before_line pt-8"}>
                        <div className='progressBorder border-[#0e47a1] absoulte'></div>
                        <div className='text-[12px] border px-4 py-2 rounded-2xl text-white bg-[#0e47a1] absoulte'>2.보험료 예시</div>
                    </div>
                </div>

            }
            {/*{
                select === "apply" &&
                <div className="flex w-[250px] justify-between items-center relative z-1 before_line pt-[70px]">
                    <div className='progressBorder border-[#0e47a1] absoulte'></div>
                    <div className='progressBorder border-[#0e47a1] absoulte'></div>
                    <div className='text-[12px] border px-4 py-2 rounded-2xl text-white bg-[#0e47a1] absoulte'>3.가입정보 입력</div>
                </div>
            }*/}
        </div>
    )
}
export default ProgressBar;
