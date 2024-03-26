import React, {useState, useRef} from 'react';
import SignatureCanvas from 'react-signature-canvas';
import styled from 'styled-components';
import {Buffer} from "buffer";
import axios from "axios";
import dayjs from "dayjs";
import cn from 'classnames';

const CanvasWrapper = styled.div`
  position: relative;
  background-color : white;
  width: 350px;
  height: 200px;
`;

const CanvasPlaceholder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
    background-color : white;
  transform: translate(-50%, -50%);
  color: black;
`;
interface openType{
    setMsg : React.Dispatch<React.SetStateAction<string>>;
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>;
    setSign : React.Dispatch<React.SetStateAction<any>>;
    name : string;
}
const Signature : React.FC<openType> = ({name, setMsg, setIsOpen,setSign}) => {
    const canvasRef = useRef<any>(null);
    const [isSigned, setIsSigned] = useState<boolean>(false);

    const save = async () => {
        try {
            if(name){
                const image = canvasRef.current.getTrimmedCanvas().toDataURL('image/png'); // image 변수에 이미지 다운로드 링크 할당, png를 jpg등의 다른 확장자로 변경 가능
                const decodedURL = image.replace(/^data:image\/\w+;base64,/, '');
                const buf = Buffer.from(decodedURL, 'base64');
                const blob = new Blob([buf], { type: 'image/png' });
                const sign = new FormData();
                let today = dayjs().format('YYYY-MM-DD');
                const file = new File([blob], name + '_서명_' + today.toString().replaceAll('-', '') + '.png', { type: 'image/png' });
                sign.append('sign',file);
                const response = await axios.post('https://insurance-open-api.simg.kr/api/v1/prod/sign', sign, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                if (response.status === 200) {
                    setSign(response.data.signName);
                } else {
                    setIsOpen(true);
                    setMsg('서비스 오류입니다.');
                    console.error('Error uploading images:', response.statusText);
                }
            }else {
                alert('이릅을 입력해주세요.');
            }
        }catch(error) {
            setIsOpen(true);
            setMsg('서비스 오류입니다.')
            console.log(error);
        }

        /*link.href = image; // a 태그의 href 속성으로 이미지 다운로드 링크
        link.download = 'sign_image.png'; // 다운로드 파일의 기본 이름 설정
        link.click(); // 임의의 a 태그를 클릭하여 다운로드 실행*/
    };
    return (
        <div className='flex justify-center items-center  my-16 flex-col '>
            <CanvasWrapper className = 'border'>
                {!isSigned && (
                    <CanvasPlaceholder>
                        여기에 서명을 해주세요.
                    </CanvasPlaceholder>
                )}
                <SignatureCanvas
                    canvasProps={{width : '350px', height : '200px'}}
                    ref={canvasRef}
                    onBegin={() => {
                        setIsSigned(true);
                    }}
                />
            </CanvasWrapper>
            <div className='flex w-[350px] mt-4'>
                <button
                    type={'button'}
                    className='basis-1/2 mx-8 py-2 border bg_base text-white rounded-lg'
                    onClick={(event : React.MouseEvent<HTMLButtonElement>) => {
                        canvasRef.current.clear(); // 리셋
                        setIsSigned(false);
                        setSign('');
                    }}
                >
                    초기화
                </button>
                <button
                    type={'button'}
                    className={cn('basis-1/2 border mx-8 rounded-lg',{'bg-white': !isSigned, 'bg_base text-white' : isSigned})}
                    disabled={!isSigned} // 버튼 disabled
                    onClick={() => save()}
                >
                    확인
                </button>
            </div>
        </div>
    );
};

export default Signature;
