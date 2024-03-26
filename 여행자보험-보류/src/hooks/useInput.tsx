import React, {useCallback, useState} from 'react';

export function useInput(initialValue : string) {
    const [value, setValue] = useState(initialValue);

    const onChangeHandler = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    },[]);

    return [ value, onChangeHandler ] as const;
}

