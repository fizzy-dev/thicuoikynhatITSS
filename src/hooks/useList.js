import React, { useState } from 'react';

function useList() {
    const defaultData = ["Huyen", "Hoa", "Hung", "Long"];
    const [keyword, setKeyword] = useState("");
    return { defaultData, keyword, setKeyword };
}

export default useList;