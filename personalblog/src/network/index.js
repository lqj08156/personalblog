import axios from "axios";

const request=(config)=>{
    const instance=new axios({
      baseURL:"#",
      timeout:5000
    })
    instance.interceptors.request.use(config=>{
        return config
    },error => {
       console.log(error+'请求失败！')
    })

  instance.interceptors.response.use(res=>{
      return res.data
  },error => {
     console.log(error+'响应失败！')
  })
  return instance(config)
}
export default request()