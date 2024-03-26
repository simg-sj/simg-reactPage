import CircularProgress from '@mui/joy/CircularProgress';
import {useSelector} from "react-redux";
import {RootState} from "../hooks/store";
const Loading = () => {
    const {loading} = useSelector((state : RootState) => state.load);
    console.log(loading);
    return (
        <>
            {
                loading === false ? "" :
                    <>
                        <div className='fixed inset-0 z-20 bg-black/50'>
                            <div className='fixed -translate-x-1/2 left-1/2 top-1/3 flex-col flex justift-center items-center'>
                                    <h2 className='font-bold text-[20px] pb-4'>Loading...</h2>
                                    <CircularProgress
                                        sx={{
                                            "--CircularProgress-size": "100px",
                                            "--CircularProgress-progressThickness": "10px",
                                            "--CircularProgress-trackThickness": "10px"
                                        }}
                                    />
                            </div>
                        </div>
                    </>
            }
        </>

    )
}
export default Loading;
