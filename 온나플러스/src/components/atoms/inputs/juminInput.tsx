import React, {useEffect, useState} from "react";
import {InfoProps} from "./carNumInput";
import styled from 'styled-components';

const CustomSpan = styled.span`
  position: relative;
  display: block;
  width: 100px;
  height: 36px;
  margin-left : 10px;
  &:before {
    content:'';
    display: block;
    position:absolute;
    left:10px; z-index:1;
    width:80px; height:36px;
    background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAYAAAD+4+QTAAABRGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8bAxsDEIMygxWCUmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisXDHL4E8dzDk8Ja7ZK10eK2OqRwFcKanFyUD6DxCnJhcUlTAwMKYA2crlJQUgdgeQLVIEdBSQPQfEToewN4DYSRD2EbCakCBnIPsGkC2QnJEINIPxBZCtk4Qkno7EhtoLAtxG5p4BwRZmji4eBFxLBihJrSgB0c75BZVFmekZJQqOwFBKVfDMS9bTUTAyMDJiYACFOUT15xvgsGQU40CI5cxnYDBdzMDAxIoQS6pmYNi2C+iNkwgx9T0MDMJAdQfiChKLEuEOYPzGUpxmbARhc29nYGCd9v//53AGBnZNBoa/1////739//+/yxgYmG8B9X4DAEqZXm6PBouGAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAAAZoAMABAAAAAEAAAAXAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdERrfoIAAAHUaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjIzPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI1PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6VXNlckNvbW1lbnQ+U2NyZWVuc2hvdDwvZXhpZjpVc2VyQ29tbWVudD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cp1dxrAAAAFaSURBVEgNzZQxr0RAEMeHHHcXIohcqxe0vn+rFaVCoZAjKIhc8N6Nl0ssb44t7uVNw+z+Z367M9kRvp4GHzbxw/nn9P8XghWepulwEU5HlUVRQJqm0Pc9jOP4UwZRhPP5DLfbDWzbJlMJe43HE8dxDFVVkUlw43K5gO/783ct3IWEYTiffh34my8IAgRBALIsM9tvG58kyWEAZsVeRVHEANAhIY/HA7Is2wTsLbRtC3meMzISUpYlI+Rx7vc7IychdV0zQh6n6zpGTkKGYWCEPA6WemkkZCni/Ref72dprLfY0TRt4fH9KorCBJAQy7IYIY+zPiAJwdOoqsqTe9ZiqdYjhoRghOd5gK+YxxzHgcM9wcSSJIHrupsgCoo3ME1zs707uzACpy4OSert4HDEW1+v1w0AFw5BXpE4m5qmmScyTmdd18EwjN2bckFeMN7v28bzJqP0fwL5BsVceOtTqbNIAAAAAElFTkSuQmCC');
    background-repeat: repeat-x;
    background-position: 0px calc(50% - 2px);
    background-size: 11px auto;
  }
   input {
    position: absolute; z-index:2;
    font-size: 25px;
    text-indent:10px;
    color: black;
    background:transparent;
  }
`

//background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAYAAAD+4+QTAAABRGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8bAxsDEIMygxWCUmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisXDHL4E8dzDk8Ja7ZK10eK2OqRwFcKanFyUD6DxCnJhcUlTAwMKYA2crlJQUgdgeQLVIEdBSQPQfEToewN4DYSRD2EbCakCBnIPsGkC2QnJEINIPxBZCtk4Qkno7EhtoLAtxG5p4BwRZmji4eBFxLBihJrSgB0c75BZVFmekZJQqOwFBKVfDMS9bTUTAyMDJiYACFOUT15xvgsGQU40CI5cxnYDBdzMDAxIoQS6pmYNi2C+iNkwgx9T0MDMJAdQfiChKLEuEOYPzGUpxmbARhc29nYGCd9v//53AGBnZNBoa/1////739//+/yxgYmG8B9X4DAEqZXm6PBouGAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAAAZoAMABAAAAAEAAAAXAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdERrfoIAAAHUaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjIzPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI1PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6VXNlckNvbW1lbnQ+U2NyZWVuc2hvdDwvZXhpZjpVc2VyQ29tbWVudD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cp1dxrAAAAFaSURBVEgNzZQxr0RAEMeHHHcXIohcqxe0vn+rFaVCoZAjKIhc8N6Nl0ssb44t7uVNw+z+Z367M9kRvp4GHzbxw/nn9P8XghWepulwEU5HlUVRQJqm0Pc9jOP4UwZRhPP5DLfbDWzbJlMJe43HE8dxDFVVkUlw43K5gO/783ct3IWEYTiffh34my8IAgRBALIsM9tvG58kyWEAZsVeRVHEANAhIY/HA7Is2wTsLbRtC3meMzISUpYlI+Rx7vc7IychdV0zQh6n6zpGTkKGYWCEPA6WemkkZCni/Ref72dprLfY0TRt4fH9KorCBJAQy7IYIY+zPiAJwdOoqsqTe9ZiqdYjhoRghOd5gK+YxxzHgcM9wcSSJIHrupsgCoo3ME1zs707uzACpy4OSert4HDEW1+v1w0AFw5BXpE4m5qmmScyTmdd18EwjN2bckFeMN7v28bzJqP0fwL5BsVceOtTqbNIAAAAAElFTkSuQmCC');
const JuminInput = (props : {info : InfoProps, setInfo : React.Dispatch<React.SetStateAction<InfoProps>>}  ) => {
    const [birth , setBirth] = useState<string>('');
    const [jumin, setJumin] = useState<string>('')
    const [check, setCheck] = useState<boolean>(false);
    const juminRegex = /\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]/g;
    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {id} = e.target;
        const {value} = e.target;
        const onlyNumber = value.replace(/[^-0-9]/g, '');
        if(id === 'birth') {
            setBirth(onlyNumber);
        }
        if(id === 'jumin'){
            setJumin(onlyNumber);
        }
    }
    useEffect(() => {
            let juminAll = birth + jumin;
            console.log(juminAll)
            if (juminRegex.test(juminAll)) {
                setCheck(true);
                props.setInfo((prevState) => {
                    return { ...prevState, cJumin: juminAll }
                });
            } else {
                props.setInfo((prevState) => {
                    return { ...prevState, cJumin: '' }
                });
                setCheck(false);
            }
    }, [birth,jumin]);
    return(
        <div className='flex w-full items-center justify-center pb-4'>
            <div className='sub_title flex-col flex items-center basis-1/3 pl-[10px]'>
                주민번호
                <span className='text-[12px]'>(외국인등록번호)</span>
            </div>
            <div className='flex-col  basis-2/3'>
                <div className='flex ml-[12px]'>
                    <input type={'text'} id={'birth'} maxLength={6} value={birth} onChange={onChangeHandler} className='input w-[100px] mr-2 input ' placeholder='앞자리'/>
                    <h2 className='font-bold text-[20px]'>-</h2>
                    <CustomSpan className="hover:border-[#0e47a1] rounded-lg border">
                    <input type={'password'} maxLength={1} id={'jumin'} value={jumin} onChange={onChangeHandler} className='h-[28px]  w-[100px] hover:outline-none focus:outline-none '/>
                    </CustomSpan>
                </div>
                {!check && jumin !== '' && <h2 className='text-red-500 text-[11px] pt-2 pl-4'>주민번호를 확인해주세요.</h2>}
            </div>
        </div>
    )
}
export default JuminInput;
