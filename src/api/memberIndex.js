import axios from "axios";

const memberPath = 'http://10.112.58.190/member'

async function memberJoin(userData){
    const url = memberPath;
    let res = await axios.post(url, userData);
    return res;
}
 
async function memberLogin(userData){
    const url = memberPath+'/login';
    let res = await axios.post(url, userData);
    return res;
}

async function memberIdCheck(userData){
    const url = memberPath+'/idcheck';
    let res = await axios.post(url, userData);
    return res;
}

async function memberInfo(id){
    const url = memberPath+'/info?id='+id;
    let res = await axios.get(url);
    return res;
}

async function memberUpdate(userData){
    const url = memberPath;
    let res = await axios.put(url, userData);
    return res;
}

async function memberDelete(id){
    const url = memberPath+'?id='+id;
    let res = await axios.delete(url, id);
    return res;
}

export { memberJoin, memberLogin, memberIdCheck, memberInfo, memberUpdate, memberDelete };