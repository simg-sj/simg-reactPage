import CircularProgress from '@mui/material/CircularProgress';
import {useSelector} from "react-redux";
import {RootState} from "../../pages/reducers";
const Loading = () => {
    const {loading} = useSelector((state : RootState) => state.userInfo);
    console.log(loading);
    return (
        <>
            {
                loading === false ? "" :
                    <>
                        <div className='fixed inset-0 z-20 bg-black/50'>
                            <div className='fixed top-1/3 right-1/2'>
                                <CircularProgress />
                            </div>
                        </div>
                    </>
            }
        </>

    )
}
export default Loading;