'use strict'

function ifStringThenCallBack(str, callBack) {
    if(typeof str == 'string')
        callBack(str);
    
}
ifStringThenCallBack('abc', console.log);