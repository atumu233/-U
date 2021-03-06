
import axios from 'axios'
import qs from 'qs'

const baseUrl = '/api'

// 响应拦截器
axios.interceptors.response.use(res=>{
    console.log(res);
    return res
})


// 菜单添加
export const reqMunuAdd=(form)=>{
    return  axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:qs.stringify(form)
    })
}
// 菜单列表
export const reqMenuList=(params)=>{
    return  axios({
        url:baseUrl+'/api/menulist',
        method:'get',
        params:params
    })
}

// 菜单删除
export const reqMenuDel=(id)=>{
    return  axios({
        url:baseUrl+'/api/menudelete',
        method:'post',
        data:id
    })
}

// 菜单获取一条数据
export const reqMenuOne=(params)=>{
    return  axios({
        url:baseUrl+'/api/menuinfo',
        method:'get',
        params:params
    })
}

// 菜单修改
export const reqMenuEdit=(form)=>{
    return  axios({
        url:baseUrl+'/api/menuedit',
        method:'post',
        data:form
    })
}


///////////////////角色管理////////////////////////


// 角色添加
export const reqRoleAdd=(form)=>{
    return  axios({
        url:baseUrl+'/api/roleadd',
        method:'post',
        data:qs.stringify(form)
    })
}
// 角色列表
export const reqRoleList=()=>{
    return  axios({
        url:baseUrl+'/api/rolelist',
        method:'get',
    })
}

// 角色删除
export const reqRoleDel=(id)=>{
    return  axios({
        url:baseUrl+'/api/roledelete',
        method:'post',
        data:id
    })
}

// 角色获取一条数据
export const reqRoleOne=(params)=>{
    return  axios({
        url:baseUrl+'/api/roleinfo',
        method:'get',
        params:params
    })
}

// 角色修改
export const reqRoleEdit=(form)=>{
    return  axios({
        url:baseUrl+'/api/roleedit',
        method:'post',
        data:form
    })
}




///////////////////管理员管理////////////////////////


// 管理员添加
export const reqUserAdd=(form)=>{
    return  axios({
        url:baseUrl+'/api/useradd',
        method:'post',
        data:qs.stringify(form)
    })
}
// 管理员列表
export const reqUserList=(params)=>{
    return  axios({
        url:baseUrl+'/api/userlist', 
        method:'get',
        params:params
    })
}

// 管理员删除
export const reqUserDel=(id)=>{
    return  axios({
        url:baseUrl+'/api/userdelete',
        method:'post',
        data:id
    })
}

// 管理员获取一条数据
export const reqUserOne=(params)=>{
    return  axios({
        url:baseUrl+'/api/userinfo',
        method:'get',
        params:params
    })
}

// 管理员修改
export const reqUserEdit=(form)=>{
    return  axios({
        url:baseUrl+'/api/useredit',
        method:'post',
        data:form
    })
}

// 管理员总数
export const reqUserCount=()=>{
    return  axios({
        url:baseUrl+'/api/usercount',
        method:'get',
    })
}

