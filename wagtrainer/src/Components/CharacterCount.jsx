import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../Recoil/Selectors/charCountState';

const CharacterCount = () => {
    const count = useRecoilValue(charCountState);

    return <>Character Count: {count} </>
}

export default CharacterCount;